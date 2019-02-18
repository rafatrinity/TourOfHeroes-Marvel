import { toastr } from 'toastr';
import { Md5 } from 'ts-md5/dist/md5';

let md5 = new Md5();
var timestamp = Number(new Date());
var hash = Md5.hashStr(timestamp + '74980acd1fc05c9b9f9316de92dc33b749edd2b6b36131f85cd978fc4aca2da7ea186758');
export const environment = {
	production: true,
	apiUrl: `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=d8b23f3429d72898aaffd1a321761b4a&hash=${hash}`,
	settings: {
		appErrorPrefix: '[Angular Heroes Error] ',
		appTitle: 'Angular Heroes',
		version: '1.0.0'
	}
};

toastr.options.timeOut = 1500;
