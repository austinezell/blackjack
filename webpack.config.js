module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exludes: "node_modules",
        loader: "babel-loader"
      },

      {
        test: /\.css$/,
        exludes: "node_modules",
        loader: "style!css"
      }
    ]
  }
};
