// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// GitHub Actions 환경변수에서 저장소 이름 추출 (예: 'username/portfolio' -> '/portfolio')
const repo = process.env.GITHUB_REPOSITORY ? '/' + process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const siteUrl = process.env.GITHUB_REPOSITORY_OWNER ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io` : 'https://example.com';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: repo,
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()]
});