// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import github from "@astrojs/github";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
  adapter: github(),
});

