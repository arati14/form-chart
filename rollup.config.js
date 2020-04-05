import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import {terser} from 'rollup-plugin-terser';

export default {
    input : 'src/main.js',
    output :[{
        name: 'script',
        file : 'build/form-chart.js',
        format: 'iife'
        
    },
    {
    file: 'build/form-chart.min.js',
    name: 'min_script',
    format: 'iife',
    plugins: [terser()]
  }],
    plugins: [
        resolve(),
        commonjs(),
       
    ]
};