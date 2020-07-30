## 步骤
- 安装 lerna
```
npm i -g lerna
mkdir lerna-repo && cd lerna-repo
lerna init
```
- 安装依赖
```
lerna bootstrap 这样packages下所有的模块依赖被安装
packages里面的包未发布时引用应该会创建软连接，在node_modules中查看
```
- 发布
```
lerna publish 一键发布
登陆npm时会有下面问题。
修改 下载仓库为淘宝镜像,  如果要发布自己的镜像需要修改回来
npm config set registry https://registry.npmjs.org/
npm install -g cnpm --registry=https://registry.npm.taobao.org
只要package.json中名字一样就会被视为相同包
.gitignore 文件下有 package-lock.json时会发布失败。
包的名字如果乱起还会被npm过滤，导致不能发布。
~/.bash_profile 
export GITHUB_AUTH="..."
```
- lerna-changelog
```
lerna-changelog 需要获取 github 权限,
修改环境变量，即使执行了source xxx，仍然不行，重启生效。
pull master 执行 lerna-changelog后终端生成日志，然后复制粘贴到 release note。
github上点进去tag-> edit tag -> 复制粘贴生成的 changelog 就ok
https://github.com/zhangzs000/lerna-test/releases/tag/v0.0.9
很奇怪：
在github上申请的token不一会就自动删除了。然后还待重新申请，source 不起作用还带重启
```