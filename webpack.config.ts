import { resolve } from 'path';

const config = () => {
    const mode = process.env.NODE_ENV || 'production';
    console.info(`build in ${mode} mode.`)
    return {
        entry: './src/index.ts',
        mode,
        target: 'web',
        output: {
            filename: 'main.js',
            path: resolve(__dirname, 'dist'),
        },
        plugins: [],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules|dist/,
                    loader: 'awesome-typescript-loader'
                }
            ]
        }
    };
};

export default config;