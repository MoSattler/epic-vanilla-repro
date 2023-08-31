/// <reference types="vitest" />

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	// @ts-expect-error their types are wrong
	plugins: [react(), vanillaExtractPlugin()],
	css: { postcss: { plugins: [] } },
	test: {
		include: ['./app/**/*.test.{ts,tsx}'],
		setupFiles: ['./tests/setup/setup-test-env.ts'],
		globalSetup: ['./tests/setup/global-setup.ts'],
		coverage: {
			include: ['app/**/*.{ts,tsx}'],
			all: true,
		},
	},
})
