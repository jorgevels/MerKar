const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

// Creamos un nuevo modulo que vamos a exportar con esta configuracion
// Vamos a configurar cada unos de los elementos que necesitamos

module.exports = {
  // Iniciando por la entrada del proyecto
  // Haciendo referencia al archivo principal
  /* entry: "./js/app.js", */
  // En este output, es donde vamos a guardar los archivos resultantes cuando hagamos la configuracion
  /* entry: {
    home: [
      "./src/js/app.js",
      ],
  }, */

  entry: {
    index: "./src/js/app.js",
    about: "./src/js/ModalInfo.js",
  },

  output: {
    // La instancia resolve nos ayuda a detectar el directorio donde nos encontramos y el directorio donde vamos a guardar los archivos compilados
    path: path.resolve(__dirname, "dist"),
    // Filename nos pode un nombre al archivo compilado
    /* filename: "bundle.js", */
    filename: "[name].[hash:20].js",
  },

  /*  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:20].js",
  }, */

  // Este elemento resulve las extensiones que vamos a utilizar
  resolve: {
    extensions: [".js"],
  },

  // Se añaden los plugins que necesitamos
  plugins: [
    // pasamo un objeto con la configuracion que necesitamos

    new HtmlWebpackPlugin({
      //Donde esta ubicado el template que tenemos
      /*  template: "./public/index.html", */
      template: "./src/page/main/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
      /*  filename: "./css/[name].css", */
    }),
    new WebpackPwaManifestPlugin({
      //Le pasamos el objeto de configuracion
      name: "MerKar",
      shortname: "Crea tu lista de Compras",
      description: "Crea tu lista de compras de manera facil",
      background_color: "#f8e808",
      theme_color: "#b1a",
      //Array iconos de la aplicacion
      icons: [
        {
          src: path.resolve("./src/assets/favicon/android-chrome-192x192.png"),
          //Le pasamos todos los tamaños que requerimos
          sizes: [192, 512],
        },
      ],
    }),
    new FaviconsWebpackPlugin("./src/assets/favicon/apple-touch-icon.png"),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://res.cloudinary.com"),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
      ],
    }),
  ],

  // Modulo con las reglas necesarias
  module: {
    rules: [
      {
        // Regla principal
        // Identificacion de los archivos con una expresion regular
        test: /\.(js|jsx)$/,
        // Exclusion de carpetas
        exclude: /node_modules/,
        // Utilizamos el loader de babel instalado
        use: {
          loader: "babel-loader",
        },
      },
      {
        // Regla para trabajar con los archivos html
        test: /\.html$/,
        // Utilizamos el loader de babel instalado
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            /* options: { name: "assets/[hash].[ext]" }, */
            options: { name: "./src/assets/favicon/[hash].[ext]" },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
