module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier'
    
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'quotes': [
      2,
      'single',
      {
        "avoidEscape": true
      }
    ],
    'import/resolver': {
      "eslint-import-resolver-custom-alias": {
        "alias": {
          "Components/*": [
            "src/components/*"
          ],
          "Pages/*": [
            "src/pages/*"
          ],
          "Styles/*": [
            "src/styles/*"
          ],
          "Public/*": [
            "public/*"
          ],
          "Utils/*": [
            "src/utils/*"
          ],
          "Configs/*": [
            "configs/*"
          ],
          "Store/*": [
            "src/redux/*"
          ],
          "Tools/*": [
            "src/tools/*"
          ],
          "Hooks/*": [
            "src/hooks/*"
          ],
          "Locales/*": [
            "locales/*"
          ],
          "Statics/*": [
            "src/static/*"
          ],
          "Context/*": [
            "src/context/*"
          ],
          "Constants/*": [
            "src/constants/*"
          ]
        },
        "baseUrl": "./",
        "extensions": [
          ".js",
          "jsx"
        ]
      },
    }
  },
}
