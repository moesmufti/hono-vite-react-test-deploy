import reactStack from 'hono-vite-react-stack'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [reactStack(), tailwindcss()]
})
