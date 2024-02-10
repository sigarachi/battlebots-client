import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			components: `${path.resolve(__dirname, './src/components')}`,
			config: `${path.resolve(__dirname, './src/config')}`,
			pages: `${path.resolve(__dirname, './src/pages')}`,
			services: `${path.resolve(__dirname, './src/services')}`,
			urils: `${path.resolve(__dirname, './src/utils')}`,
		},
	},
});
