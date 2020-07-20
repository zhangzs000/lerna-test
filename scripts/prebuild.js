const fs = require('fs');
const { join } = require('path');
const chalk = require('chalk');
const { log, promisify } = require('util');

async function asyncCommit() {
    log(chalk.bold.cyan('更新编译代码版本'));
    const refs = await promisify(fs.readFile)(join(__dirname, '..', '.git', 'HEAD')).then(buffer => {
        return buffer
            .toString()
            .split(':')[1]
            .trim();
    });
    log(chalk.yellow('当前开发分支：') + chalk.blue(refs));
    const commit = await promisify(fs.readFile)(join(__dirname, '..', '.git', refs)).then(buffer => {
        return buffer.toString().slice(0, 8);
    });
    log(chalk.yellow('打包分支Commit：') + chalk.blue(commit));
    await new Promise((res, rej) => {
        const commitFile = fs.createWriteStream(join(__dirname, '..', 'packages', 'umiapp', 'build', 'commit.json'), {
            autoClose: true
        });
        commitFile.write(JSON.stringify({ commit, refs }), () => {
            log(chalk.bold.green('最新commit记录写入成功'));
        });
    });
    log(chalk.bold.yellow('开始编译项目代码'));
    return { commit, refs };
}

asyncCommit().catch(reason => log(chalk.bold.red('本地未找到git记录, 忽略更新commit')));