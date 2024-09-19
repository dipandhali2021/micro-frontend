const {shareAll,withModuleFederationPlugin} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  
  remotes: {
    'products': 'https://micro-frontend-products-app.vercel.app/remoteEntry.js',
    'carts': 'https://micro-frontend-carts-app.vercel.app/remoteEntry.js',
    'orders': 'https://micro-frontend-orders-app.vercel.app/remoteEntry.js',
  },


  shared:{
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }), 
  }
});