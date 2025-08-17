import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {  
        target: "https://script.google.com/macros/s/AKfycbwlvezg83ZhPPeTzmLfv-eHsc2g-S-ka2yPMs8z_scNn04DHFwQ0O_poivIT2aIenX1/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
