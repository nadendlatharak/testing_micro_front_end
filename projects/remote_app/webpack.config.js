const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remote',
  // remotes: {
  //   // "testingMicroFrontEnd": "http://localhost:4200/remoteEntry.js",
  //   "dashboard": "http://localhost:4201/remoteEntry.js",    
  // },

  exposes: {
    gg: './projects/remote_app/src/app/app.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
