const {shareAll,withModuleFederationPlugin, share} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "carts",
  
  exposes: {
    './Module': './projects/carts-app/src/app/carts/carts.module.ts',
  },

  shared:{
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }), 
  }
});