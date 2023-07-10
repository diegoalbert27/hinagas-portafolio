import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
  }

  if (command === 'serve') {
    config.base = ' https://diegoalbert27.github.io/hinagas-portafolio/'
  }

  return config
})
