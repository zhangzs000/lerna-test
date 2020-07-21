module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        indent: ['warn', 1],
        semi: 'warn',
        'react/react-in-jsx-scope': 0,
        'react/display-name': 0,
        camelcase: 0,
        'no-console': 1,
        'no-constant-condition': 0
    }
};
