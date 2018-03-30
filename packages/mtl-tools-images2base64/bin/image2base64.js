#!/usr/bin/env node

'use strict';

const program = require('commander');
const base64Img = require('base64-img');
const glob = require("glob");
const chalk = require('chalk');

const fs = require('fs');
const path = require('path');
const os = require('os');

program
  .version(require('../package').version)
  .usage('<imageDir> <outputFileName>')
  .on('--help', function() {
    console.log()
    console.log('  Examples:')
    console.log()
    console.log('    $ base64 imageDir outputFileName')
    console.log()
  })
  .parse(process.argv)

if (program.args.length < 1) return program.help()

var imageDir = program.args[0];

var outputFileName = program.args[1] || 'index';

var source = path.join(process.cwd(), imageDir);
var jsPath = path.join(source, outputFileName + '.js');

if (fs.existsSync(source)) {
  if (fs.existsSync(jsPath)) {
    fs.unlinkSync(jsPath)
  }

  glob("**/*.*", {cwd: source}, function (er, files) {
    if (er) console.log(er);

    console.log('starting to covert...');

    for(var i = 0; i < files.length; i++) {
      let item = files[i]

      if (!(/(.*)+\.(jpg|png)$/i.test(item))) {
        console.log(chalk.red(item + ' is not png or jpg!'));
        continue;
      }

      let imagePath = path.join(source, item);
      let imageName = item.replace(/\.\w+$/, '');
      let imageHumpName = str2Hump(imageName);

      fs.stat(imagePath, function(err, stats) {
        if (err) console.log(err)

        if (stats.size >= 10000) {
          console.log(chalk.yellow(item + ' image size is over 10kb,not recommend to base64!'));
        }
      })

      base64Img.base64(imagePath, function (err, data) {
        if (err) console.log(err);

        let str = 'export const ' + imageHumpName + ' = "' + data + '";' + os.EOL;

        fs.appendFileSync(jsPath, str);

        console.log('covert success!');
      })
    }
  })
} else {
  console.log('file not exist!');
}

function str2Hump(str) {
  if (typeof str !== 'string') return console.log('images name is not a string!');
  
  return str.replace(/-(\w)/g, function ($0, $1) {
    return $1.toUpperCase();
  })
}