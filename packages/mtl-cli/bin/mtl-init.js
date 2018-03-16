#!/usr/bin/env node

const program = require('commander');
const mkdirpSync = require('fs-extra').mkdirpSync;
const existsSync = require('fs').existsSync;
const join = require('path').join;
const chalk = require('chalk');
const error = chalk.red;

program
  .usage('[options] appName')
  .option('--sample', '生成一个示例 MTL 应用.')
  .option('--no-install', '项目初始化时默认不执行 npm install.')
  .parse(process.argv);

if (!program.args[0]) {
  program.help();
} else {
  const dest = join(process.cwd(), program.args[0]);
  if (existsSync(dest)) {
    console.error(error('Existing directory here, please run new command for an empty folder!'));
    process.exit(1);
  }
  mkdirpSync(dest);
  process.chdir(dest);
  require('../lib/init')(program);
}