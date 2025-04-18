import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  server: {
    host: "0.0.0.0",
    allowedHosts: ["12c0-240e-399-e09-1340-3882-1614-aa1c-7254.ngrok-free.app"],
  },
});
