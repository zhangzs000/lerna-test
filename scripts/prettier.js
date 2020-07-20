const prettier = require('prettier');
const chalk = require('chalk');
const { join, relative } = require('path');
const fs = require('fs');
const { log } = require('util');
const changedFiles = require('./changed-helper')();

const file = fs.readFileSync(join(__dirname, '..', '.prettierignore'), { encoding: 'utf-8' });
const ignoresConfig = file.split('\n').filter((e) => e.trim().indexOf('#') === -1 && e.trim() !== '') || [];

const ignore = require('ignore')().add(ignoresConfig);

const getAllFiles = () => {
    const readFile = (path) => {
        if (ignore.ignores(path)) return [];
        const files = [];
        const stat = fs.statSync(path);
        if (stat.isFile()) {
            files.push(path);
        } else {
            const folder = fs.readdirSync(path);
            while (folder.length) {
                const filePath = join(path, folder.shift());
                if (ignore.ignores(filePath)) {
                    continue;
                }
                const subStat = fs.statSync(filePath);
                if (subStat.isFile()) {
                    files.push(filePath);
                } else {
                    files.push(...readFile(filePath));
                }
            }
        }
        return files;
    };

    return readFile(relative(process.cwd(), __dirname));
};

function run() {
    const ALL = '--all';
    const [, , all = ''] = process.argv;
    const prettierList = all == ALL ? getAllFiles() : changedFiles.filter(ignore.createFilter());
    log(chalk.bold.cyan('格式化开始'));
    log(chalk.bold.yellow(`${all === ALL ? '全量' : '增量'}模式`));
    log(chalk.bold.cyan('过滤忽略文件列表') + chalk.bold.yellow('(.prettierignore)'));

    const config = {
        config: join(__dirname, '..', '.prettierrc.js')
    };
    prettierList.forEach((file) => {
        const options = prettier.resolveConfig.sync(file, config);
        try {
            const input = fs.readFileSync(file, 'utf-8');
            const output = prettier.format(input, options);
            if (output !== input) {
                log(chalk.bold.cyan('formatter >> ') + chalk.bold.green(file));
                fs.writeFileSync(file, output, 'utf-8');
            }
        } catch (e) {
            log(chalk.bold.red(e));
            throw new Error('prettier is error:' + e.message);
        }
    });
    log(chalk.bold.cyan('格式化结束'));
}

run();
