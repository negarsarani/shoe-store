import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     external: ['events', 'url', 'http', 'path']
  //   }
  // },
  plugins: [jsconfigPaths()],
});
