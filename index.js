#! /usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer')
const chalk = require('chalk');
const TEMPLATE_MAP = require("./help").TEMPLATE_MAP;

// 创建失败提示
const errorLog = (error) => {
  console.log(`error -------------------------------------------------------------------${error || 'error'}`)
}
//version 版本号
//name 新项目名称
program.version(`xmh-cli ${require("./package.json").version}`)
  .usage(`<command> [option]`)
  .command('create <projectName>')
  .option("-f, --force", "overwrite target directory if it exists") // 强制覆盖
  .action((projectName, cmd) => {
    inquirer.prompt(
      [
        {
          type: 'list',
          name: 'templateType',
          message: '请选择模版',
          choices: Object.keys(TEMPLATE_MAP),
          default: Object.keys(TEMPLATE_MAP)[0],
        },
      ],
    ).then((options) => {
      // 引入 create 模块，并传入参数
      require("./lib/create")(projectName, cmd, options);
    }).catch((error) => {
      errorLog(error)
    })
  });

// 监听 --help 指令
program.on("--help", function () {
  // 前后两个空行调整格式，更舒适
  console.log();
  console.log(
    `Run ${chalk.cyan(
      "xmh-cli <command> --help"
    )} for detailed usage of given command.`
  );
  console.log();
});

program.parse(process.argv);
