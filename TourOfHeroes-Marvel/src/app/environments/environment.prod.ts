import { toastr } from 'toastr';
export const environment = {
	production: true,
	apiUrl: 'https://gateway.marvel.com/v1/public/characters',
	apiKey: '74980acd1fc05c9b9f9316de92dc33b7',
	settings: {
		appErrorPrefix: '[Angular Heroes Error] ',
		appTitle: 'Angular Heroes',
		version: '1.0.0'
	}
};

toastr.options.timeOut = 1500;
