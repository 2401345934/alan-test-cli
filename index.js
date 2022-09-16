#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const inquirer = require('inquirer')

// 创建失败提示
const errorLog = (error) => {
  console.log(`error -------------------------------------------------------------------${error || 'error'}`)
}
//version 版本号
//name 新项目名称
program.version('1.0.6', '-v, --version')
    .command('create <projectName>')
    .action((projectName) => {
      inquirer.prompt(
        [
          {
            type: 'list',
            name: 'templateType',
            message: '请选择模版',
            choices: ['vue', 'react'],
            default: 'vue',
          },
        ],
      ).then((options) => {
        const { templateType }  = options
        if (templateType === "vue") {
          console.log('clone template ...');
          download('github:2401345934/webpack-vue-demo', projectName, function (err) {
              console.log(err ? 'Error' : 'Success')
          })
        } else if(templateType === "react") {
            console.log('clone template ...');
            download('github:2401345934/webpack-react-demo', projectName, function (err) {
                console.log(err ? 'Error' : 'Success')
            })
        }
      }).catch((error) => {
        errorLog(error)
      })
    });
program.parse(process.argv);
