import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 5000,
    host: true,
  },
  integrations: [tailwind(), astroI18next()],
});
