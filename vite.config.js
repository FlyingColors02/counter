import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
 
export default defineConfig({
  plugins: [
    react(),            // ✅ Include React plugin
    MillionLint.vite(),
  ],
});

