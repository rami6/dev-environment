import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import pluginReactConfigJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.jsx'],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },
  pluginReactConfig,
  pluginReactConfigJsxRuntime,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mjs'],
    plugins: {
      '@stylistic/ts': stylisticTs,
    },
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      '@stylistic/ts/semi': ['error', 'never'],
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          jsxSingleQuote: true,
          trailingComma: 'es5',
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
]
