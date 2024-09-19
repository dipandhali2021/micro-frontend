const {shareAll,withModuleFederationPlugin, share} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "products",
  exposes: {
    './Module': './projects/products-app/src/app/products/products.module.ts',
  },
  shared:{
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }), 
  }
});