import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react({
      babel: {
        plugins: ["@babel/plugin-transform-runtime"],
        // Use .babelrc files
        babelrc: true,
        // Use babel.config.js files
        configFile: true,
      }
    })],
    resolve: {
      alias: [
        { find: 'assets', replacement: '/src/assets' },
        { find: 'components', replacement: '/src/components' },
        { find: 'pages', replacement: '/src/pages' },
        { find: 'context', replacement: '/src/context' },
        { find: 'services', replacement: '/src/services' },
        { find: 'utils', replacement: '/src/utils' },
        { find: 'validator', replacement: '/src/validator' },
      ],
    },
})