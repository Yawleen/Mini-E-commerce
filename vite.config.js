import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/site-portfolio/projets/projets-react/Mini-E-commerce",
  plugins: [react()],
})
