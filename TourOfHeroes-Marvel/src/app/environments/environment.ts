// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	apiUrl: 'http://gateway.marvel.com/v1/public/characters',
	apiKey: '74980acd1fc05c9b9f9316de92dc33b7',
	settings: {
		appErrorPrefix: '[Angular Heroes Error] ',
		appTitle: 'Angular Heroes',
		version: '1.0.0'
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
