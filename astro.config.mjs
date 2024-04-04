import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    imageService: true
  }),
  integrations: [tailwind({
    nesting: true,
    configFile: './tailwind.config.mjs'
  }), react(), pageInsight()]
});