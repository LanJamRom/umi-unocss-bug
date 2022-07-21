import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss';

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    presets: [presetAttributify({ strict }), presetUno()],
    transformers: [transformerDirectives({enforce: 'pre'})]
  });
}

export default createConfig();
