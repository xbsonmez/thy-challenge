import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],base: "/thy-challenge",
  resolve: {
    alias: [
      { find: '@', replacement: '/src'},
      {find: 'Components', replacement: '/src/components'},
      {find: 'Pages', replacement: '/src/pages' },
      {find: 'Styles', replacement: '/src/styles'},
      {find: 'Public', replacement: 'public'},
      {find: 'Util', replacement: 'src/utils'},
      {find: 'Store', replacement: '/src/redux'},
      {find: 'Context', replacement: '/src/context'},
      {find: 'Constants', replacement: 'src/constants'},
  ]
  }
})
