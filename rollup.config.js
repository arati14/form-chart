import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
    input : 'scripts/main.js',
    external :['d3'],
    output :{
        name: 'script',
        file : 'example/bundle.js',
        format: 'umd',
        globals:{
            'd3': 'd3'
        }
    },
    plugins: [
        resolve(),
        commonjs()
    ]
};