// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  apiUrl: 'https://localhost:8000',
  production: false,
  firebase: {
    apiKey: 'AIzaSyBIZfw_HFL2FEI_A2LMMmxYvZWVxB_Daqc',
    authDomain: 'techrepairop.firebaseapp.com',
    databaseURL: 'https://techrepairop.firebaseio.com/',
    projectId: 'techrepairop',
    appId: '1:92189417296:web:7accee4ab7e916b7561655',
    measurementId: 'G-2N5V5V3MC9'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
