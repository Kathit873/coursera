import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: change this to match your GitHub repository name exactly
  // e.g. if your repo is github.com/yourname/paradise-nursery
  // then base should be "/paradise-nursery"
  base: "/YOUR_REPOSITORY_NAME",
  plugins: [react()],
})
