/* eslint-disable prettier/prettier */
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        sourceType: 'module',
    },
    'plugins': [
        '@typescript-eslint',
        'prettier'
    ],
    'rules': {
        'prettier/prettier': [
            'error',
            {
                'endOfLine': 'auto'
            }
        ],
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        quotes: ['error', 'single'],
        'no-console': 0,
        'no-var': 'error',
        'prefer-const': 'error',
    }
}
