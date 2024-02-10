module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'airbnb',
		'prettier',
		'airbnb-typescript',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: [
		'react-refresh',
		'@typescript-eslint',
		'prettier',
		'simple-import-sort',
	],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// Packages `react` related packages come first.
					['^react', '^@?\\w'],
					// Internal packages.
					['^(@|components)(/.*|$)'],
					// Side effect imports.
					['^\\u0000'],
					// Parent imports. Put `..` last.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Other relative imports. Put same-folder imports and `.` last.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					// Style imports.
					['^.+\\.?(css)$'],
				],
			},
		],
		'import/prefer-default-export': 'off',
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		],
		'simple-import-sort/exports': 'error',
	},
};
