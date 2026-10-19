import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base relativa: funciona en https://usuario.github.io/<repo>/ sin configurar nada.
// Si preferís una ruta fija: VITE_BASE=/nombre-repo/ npm run build
export default defineConfig({ base: process.env.VITE_BASE || './', plugins: [react()] })
