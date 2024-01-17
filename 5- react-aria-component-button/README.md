# react-aria-webpack-tree-shaking

This is a POC to test if React Aria can be tree-shaken without the TerserPlugin when using Webpack 5.

## Getting Started

Install the dependencies with:

```bash
pnpm install
```

Build the code:

```bash
pnpm build
```

If you want to serve the build:

```bash
pnpm serve-build
```

To explore the generated sourcemap file:

```bash
pnpm dlx source-map-explorer dist/main.js
```

## What's in this repository?

The `index.jsx` file render a simple React application with an header and a `Button` component using the `useButton` hook from `react-aria`.

By exploring the sourcemap, you can notice that only `react-aria` utility hooks and the `useButton` hook are added to the bundle.

If you are not convinced yet, go to the `index.jsx` file and uncomment the `TextField` code. Build again, explorer the sourcemap again and you'll notice that the `useTextField` hook as now been added to the bundle.

## Conclusion

As mentionned in the [webpack tree shaking documentation](https://webpack.js.org/guides/tree-shaking/) there are 2 layers of tree shaking:

1. The first one works with the `sideEffects` field of the `package.json` file and eliminates unused module at a file level (meaning the unused module must be in an separate file in order to be eliminated)

2. The second one works with the `optimization.usedExports: true` webpack configuration and the [TerserPlugin](https://www.npmjs.com/package/terser-webpack-plugin). To work, the `TerserPlugin` must have `unused` and `dead_code` options set to `true`:

```js
{
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        unused: true,
                        dead_code: true
                    }
                }
            })
        ]
    }
}
```
