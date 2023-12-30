import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  site: 'https://EXlena7-7.github.io',
  base: '/Page_landing',
});