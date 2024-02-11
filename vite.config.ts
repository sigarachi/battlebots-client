import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': `${path.resolve(__dirname, './src/components')}`,
			'@config': `${path.resolve(__dirname, './src/config')}`,
			'@pages': `${path.resolve(__dirname, './src/pages')}`,
			'@services': `${path.resolve(__dirname, './src/services')}`,
			'@utils': `${path.resolve(__dirname, './src/utils')}`,
			'@hooks': `${path.resolve(__dirname, './src/hooks')}`,
			'@hocs': `${path.resolve(__dirname, './src/hocs')}`,
			'@store': `${path.resolve(__dirname, './src/store')}`,
		},
	},
	base: '',
	server: {
		proxy: {
			'/crm': {
				target: 'http://147.45.107.29:8080',
				changeOrigin: true,
				secure: false,
			},
			'/oauth': {
				target: 'http://147.45.107.29:8080',
				changeOrigin: true,
				secure: false,
			},
			'/middleware': {
				target: 'http://147.45.107.29:8080',
				changeOrigin: true,
				secure: false,
			},
			'/login': {
				target: 'http://147.45.107.29:8080',
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
