import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'sass',
                    esModule: true,
                    resolveStyle: (name) => `@/main.scss`,
                },
            ],
        }),
    ],
});
