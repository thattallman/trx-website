import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_API_BASE_URL: JSON.stringify(env.VITE_API_BASE_URL),   
 
    },
  }
})
