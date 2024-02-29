import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

import { createRequire } from "node:module";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");
const indexFile = "./src/index.js";

export default [
  {
    input: indexFile,
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      external(),
      resolve(),
      commonjs(),
      typescript(),
      terser(),
    ],
    external: ["react", "react-dom", "react-select"],
  },
  {
    input: indexFile,
    output: [{ file: packageJson.types, format: 'es' }],
    plugins: [dts()],
  },
];
