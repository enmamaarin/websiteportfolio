import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  // ... other options
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
