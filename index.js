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
program.version('1.1.0', '-v, --version')
  .command('create <projectName>')
  .action((projectName) => {
    inquirer.prompt(
      [
        {
          type: 'list',
          name: 'templateType',
          message: '请选择模版',
          choices: ['vue', 'react', 'vue-mobile', 'react-mobile'],
          default: 'vue',
        },
      ],
    ).then((options) => {
      const { templateType } = options
      switch (templateType) {
        case "vue":
          console.log('clone template ...');
          download('github:2401345934/webpack-vue-demo', projectName, function (err) {
            console.log(err ? 'Error' : 'Success')
          })
          break
        case "react":
          console.log('clone template ...');
          download('github:2401345934/webpack-react-demo', projectName, function (err) {
            console.log(err ? 'Error' : 'Success')
          })
          break
        case "vue-mobile":
          console.log('clone template ...');
          download('github:2401345934/vue-mobile-template', projectName, function (err) {
            console.log(err ? 'Error' : 'Success')
          })
          break
        case "react-mobile":
          console.log('clone template ...');
          download('github:2401345934/react-mobile-template', projectName, function (err) {
            console.log(err ? 'Error' : 'Success')
          })
          break
        case "cli-template":
          console.log('clone template ...');
          download('github:2401345934/alan-test-cli', projectName, function (err) {
            console.log(err ? 'Error' : 'Success')
          })
          break
        case "vitepress-template":
          console.log('clone template ...');
          download('github:2401345934/vitepress-template', projectName, function (err) {
            console.log(err ? 'Error' : 'Success')
          })
          break
        case "vite-component-template":
          console.log('clone template ...');
          download('github:2401345934/vue3-alan-vite-component', projectName, function (err) {
            console.log(err ? 'Error' : 'Success')
          })
          break
      }
    }).catch((error) => {
      errorLog(error)
    })
  });
program.parse(process.argv);
