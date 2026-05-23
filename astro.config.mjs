import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eshnaidm.dev',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  }
});
