// Creator.js
const download = require('download-git-repo');
const TEMPLATE_MAP = require("./help").TEMPLATE_MAP;
const figlet = require('figlet');
const chalk = require("chalk");
const ora = require("ora");
const spinner = ora("正在冲锋中...")
class Creator {
  // 项目名称及项目路径
  constructor(name, templateType) {
    this.name = name;
    this.templateType = templateType;
  }
  // 创建项目部分
  create () {
    spinner.start();
    return new Promise((resolve, reject) => {
      download(TEMPLATE_MAP[this.templateType], this.name, (err) => {
        if (err) {
          reject(err)
          spinner.fail();
        } else {
          resolve(err)
          spinner.succeed();
          // enter 入口文件
          console.log(
            "\r\n" +
            figlet.textSync("alan", {
              font: "Ghost",
              horizontalLayout: "default",
              verticalLayout: "default",
              width: 80,
              whitespaceBreak: true,
            })
          );
          // 模板使用提示
          console.log(`\r\nSuccessfully created project ${chalk.cyan(this.name)}`);
          console.log(`\r\n  cd ${chalk.cyan(this.name)}`);
          console.log("  npm install\r\n");
          console.log("  npm run dev\r\n");
        }

      })
    })
  }
}

module.exports = Creator;
