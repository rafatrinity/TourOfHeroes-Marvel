// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Md5 } from 'ts-md5/dist/md5';

let md5 = new Md5();
var timestamp = Number(new Date());
var hash = Md5.hashStr(timestamp + "49edd2b6b36131f85cd978fc4aca2da7ea18675874980acd1fc05c9b9f9316de92dc33b7");
export const environment = {
	production: true,
	apiUrl: `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&orderBy=-modified&limit=12&apikey=74980acd1fc05c9b9f9316de92dc33b7&hash=${hash}`,
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