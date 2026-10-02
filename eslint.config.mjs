import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

// A configuração plana que o eslint-config-next 16 documenta: as regras
// de Core Web Vitals (Next, React e Hooks) mais as de TypeScript. É a
// mesma do painel do Prospecta, para as duas bases se lerem igual.
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Declarar os ignores substitui os padrões do eslint-config-next,
  // então eles vão repetidos aqui.
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
