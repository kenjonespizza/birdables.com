module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module'
    },
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:svelte/recommended',
        'prettier'
    ],
    overrides: [
        {
            files: ['**/*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: {
                    js: '@eslint/js'
                },
                extraFileExtensions: ['.svelte']
            }
        }
    ]
};
