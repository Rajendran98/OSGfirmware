// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  _loginUrl : "https://identity.trimble.com/token?grant_type=client_credentials",
  _loginProdUrl: "https://identity-stg.trimble.com/token?grant_type=client_credentials&amp;scope=openid",
  _outboundapi : "https://api.trimble.com/t/trimble.com/oem-devicegateway/1.0/outbound/NH519298?limit=3&page=1&sort=desc",
  _multipleDeviceapi: "https://api.trimble.com/t/trimble.com/oem-devicegateway/1.0/outbound/messages",
  _firmwareUpload: "api1",
  _fwdashboard: "api",
  _dashboard: "api2",
  _publishVersion: "api3",
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// 