// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,        // permet d'utiliser describe/test/expect sans importer
    environment: 'node',  // ou 'jsdom' si tu testes du DOM
    include: ['src/**/*.test.js'], // où sont tes tests
  },
});