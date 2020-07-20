# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

### 开始项目
- 初始化
```
lerna init
yarn create @umijs/umi-app // 脚手架生成项目
// 初始 使用 yarn add umi，不知为什么node_modules都安装到了 lerna勒纳 顶层目录上了
```
- script
```
lerna勒纳 配置script ,必须给对应的项目package.json 添加 name字段。
```

- commitlint
```
npm install --save-dev @commitlint/{cli,config-conventional}
提交信息必须有feat,merge等关键字，一直没权限，加了sudo也不行，后来
sudo cnpm ...
```
- husky
```
husky是一个git hook的管理工具，实现了大部分的git hook;
由于版本问题，husky安装时总是会有错误，导致没有钩子,
升级了npm => npm i -g npm 
后来npm i还是报错，找不到文件
https://github.com/typicode/husky/issues/333
rm -rf .git/hooks/
npm i -D husky
后成功。
```
- eslint
```
官网https://www.npmjs.com/package/eslint
npm install eslint --save-dev
./node_modules/.bin/eslint --init // 这个安装完所需包后就会出现.eslinttrc.js 
```
