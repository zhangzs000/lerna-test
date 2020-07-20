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
```
