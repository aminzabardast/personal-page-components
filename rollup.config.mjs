// Importing Plugins
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'

// Exporting an array of configuration objects.
// 1st one -> Export JS files
// 2nd one -> Export Types
export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/cjs/index.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/esm/index.js',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss(),
        ],
        external: [/node_modules/],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.css$/],
    },
]
