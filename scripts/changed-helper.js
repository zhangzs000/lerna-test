const execFileSync = require('child_process').execFileSync

const exec = (command, args) => {
 const options = {
  cwd: process.cwd(),
  env: process.env,
  stdio: 'pipe',
  encoding: 'utf-8'
 }

 return execFileSync(command, args, options)
}

const execGitCmd = (args) => {
 return exec('git', args).trim().toString().split('\n')
}

const changeFiles = () => {
 const mergeBase = execGitCmd(['merge-base', 'HEAD', 'master'])
 return [
  ...execGitCmd(['diff', '--name-only', '--diff-filter=ACMRTUB', mergeBase]),
  ...execGitCmd(['ls-files', '--others', '--exclude-standard'])
 ].filter((diff) => diff.trim() !== '')
}

module.exports = changeFiles
