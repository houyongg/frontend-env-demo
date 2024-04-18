import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    port: 45600,
    proxy: {
      "/webapi": {
        target: "http://localhost:3001//",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/webapi/, ""),
      },
    },
  },
});
