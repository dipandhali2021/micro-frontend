const {shareAll,withModuleFederationPlugin} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  
  remotes: {
    'products': 'http://localhost:4000/remoteEntry.js',
    'carts': 'http://localhost:2000/remoteEntry.js',
    'orders': 'http://localhost:3000/remoteEntry.js',
  },


  shared:{
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }), 
  }
});