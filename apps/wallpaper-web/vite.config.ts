import { defineConfig } from "vite";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/cesium/Build/Cesium/Workers/**/*",
          dest: "cesium/Workers",
        },
        {
          src: "node_modules/cesium/Build/Cesium/Assets/**/*",
          dest: "cesium/Assets",
        },
        {
          src: "node_modules/cesium/Build/Cesium/ThirdParty/**/*",
          dest: "cesium/ThirdParty",
        },
        {
          src: "node_modules/cesium/Build/Cesium/Widgets/**/*",
          dest: "cesium/Widgets",
        },
      ],
    }),
  ],
  define: {
    CESIUM_BASE_URL: JSON.stringify("./cesium/"),
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
