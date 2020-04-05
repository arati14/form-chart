import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
    input : 'src/main.js',
    output :{
        name: 'script',
        file : 'build/bundle.js',
        format: 'iife'
        
    },
    plugins: [
        resolve(),
        commonjs()
    ]
};