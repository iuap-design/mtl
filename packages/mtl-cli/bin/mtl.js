#!/usr/bin/env node

const updateNotifier = require('update-notifier');
const chalk = require('chalk'); // 命令行内字体展示处理
const program = require('commander'); // 窗口对话信息和
const exists = require('fs').existsSync;
const spawn = require('cross-spawn');
const join = require('path').join;

const pkg = require('../package.json');
const log = console.log

const notifier = updateNotifier({
  pkg,
  updateCheckInterval: 1000 * 60 * 60 * 24,  // 1 天检测期
  defer: true
});

notifier.notify();

const versionArgv = process.argv.slice(2).join('');
if(versionArgv == '-v' || versionArgv == '--version'){
  const version = chalk.yellow(pkg.version)
  log(`
    PACKAGE INFO
    NAME: ${chalk.green('mtl-cli')}
    VERSION: ${version}
    `);
}

program
  .usage('<command> [options]')
  .on('--help', printHelp)
  .parse(process.argv);

function printHelp() {

  log(`
  How To Use mtl-cli:
  
  ${chalk.yellow('    mtl init            # Creates a new application')}
  ${chalk.yellow('    mtl generate        # Generates new code (short-cut alias: "g")')}

  All commands can be run with -h (or --help) for more information.'
    `);
}

const aliases = {
  g: 'generate',
  u: 'update'
};
// 获取 new genetate 等命令
const args = process.argv.slice(3);
let subcmd = program.args[0]; // program.args 获取非‘-’开头的所有命令参数，以数组存储

if (aliases[subcmd]) subcmd = aliases[subcmd];

if (!subcmd) {
  program.help();
} else {
  const bin = execMTLCommander(subcmd);
  if (bin) {
    console.log(bin);
    const options = { stdio: 'inherit' }
    // 根据不同命令执行对应的文件
    const spawnHandler = spawn.sync('node', [bin], options);
  } else {
    program.help();
  }
}

// 返回匹配的可执行文件
function execMTLCommander(subcmd) {
  var file = join(__dirname, `mtl-${subcmd}.js`);
  if (exists(file)) {
    return file;
  }
}
