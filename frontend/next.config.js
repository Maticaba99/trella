let API_BACKEND
if (process.env.NODE_ENV === 'development') {
   API_BACKEND = 'http://localhost:3030'
}
if (process.env.NODE_ENV === 'production') {
  //  API_BACKEND = 'Production api'
}

module.exports = {
    env: {
    API_BACKEND: API_BACKEND,
    },
    trailingSlash: true,
    generateBuildId: async () => {
        if (process.env.BUILD_ID) {
        return process.env.BUILD_ID
        } else {
        return `${new Date().getTime()}`
        }
    },
    exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
    ) {
    const paths = {
        '/': { page: '/' },
    }
    return paths
    },
    rules: [
    {
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    },
    { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000',
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
        },
      ],
    },
  ],
}