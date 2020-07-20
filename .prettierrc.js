module.exports = {
    useTabs: false,
    tabWidth: 4,
    semi: true,
    printWidth: 140,
    singleQuote: true,
    jsxSingleQuote: true,
    jsxBracketSameLine: false,
    endOfLine: 'lf',
    trailingComma: 'none',
    parser: 'typescript',
    overrides: [
        {
            files: '*.less',
            options: {
                parser: 'less',
                endOfLine: 'auto'
            }
        },
        {
            files: '*.json',
            options: {
                parser: 'json',
                singleQuote: false,
                semi: false,
                endOfLine: 'auto'
            }
        },
        {
            files: '*.htm',
            options: {
                parser: 'html'
            }
        },
        {
            files: '*.MD',
            options: {
                parser: 'markdown'
            }
        }
    ]
};
