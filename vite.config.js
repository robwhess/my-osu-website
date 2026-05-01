import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import pkg from './package.json'

// https://vite.dev/config/
export default defineConfig({
  /*
   * Figure out base pathname based on "homepage" property in package.json.
   */
  base: pkg.homepage ? new URL(pkg.homepage).pathname : undefined,
  plugins: [react({
    jsxImportSource: "@emotion/react"
  })],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
})
