module.exports = {
 extends: ['@commitlint/config-conventional'],
 rules: {
  'header-max-length': [2, 'always', 120],
  'subject-case': [0],
  'type-enum': [2, 'always', ['release', 'docs', 'chore', 'feat', 'fix', 'merge', 'perf', 'refactor', 'revert', 'style', 'test', 'doc', 'bug', 'enhancement']],
  'scope-empty': [0]
 }
}
