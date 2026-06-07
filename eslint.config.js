import js from '@eslint/js';
import globals from 'globals';
import svelte from 'eslint-plugin-svelte';

export default [
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    files: ['src/**/*.{js,svelte}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    ignores: ['dist', 'node_modules'],
  },
];
