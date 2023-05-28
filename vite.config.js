import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
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