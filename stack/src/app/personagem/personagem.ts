export class Personagem{
	code: number;
	status: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	etag: string;
	data: data;
	proto: Array<any>
}
export class data{
	count: number;
	limit: number;
	results: Array<heroi>;
}

export class heroi{
	id: number;
	name: string;
	description: string;
	modified: Date;
	thumbnail: any
}