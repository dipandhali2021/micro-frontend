const {shareAll,withModuleFederationPlugin, share} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "orders",
  exposes: {
    './Module': './projects/orders-app/src/app/orders/orders.module.ts',
  },
  shared:{
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }), 
  }
});
