import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import {terser} from 'rollup-plugin-terser';

export default {
    input : 'src/main.js',
    output :[{
        name: 'script',
        file : 'build/bundle.js',
        format: 'iife'
        
    },
    {
    file: 'build/bundle.min.js',
    format: 'iife',
    name: 'version',
    plugins: [terser()]
  }],
    plugins: [
        resolve(),
        commonjs(),
       
    ]
};