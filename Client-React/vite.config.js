import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {    
        target: "https://script.google.com/macros/s/AKfycbwzN9d_YBYxzaaQt_LMKlsq8AkuDoLTXqD0d6FUKgEaApokB7Er_VcE3YzvovDu1ozg/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
