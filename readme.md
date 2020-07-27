## 步骤
- 安装依赖
```
lerna bootstrap 这样packages下所有的模块依赖被安装
```
- 发布
```
lerna publish 一键发布
登陆npm时会有下面问题。
修改 下载仓库为淘宝镜像,  如果要发布自己的镜像需要修改回来
npm config set registry https://registry.npmjs.org/
npm install -g cnpm --registry=https://registry.npm.taobao.org
只要package.json中名字一样就会被视为相同包

```