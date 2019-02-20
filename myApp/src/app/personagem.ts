export interface Personagem{
	code: number,
	status: string,
	copyright: string,
	attributionText: string,
	attributionHTML: string,
	etag: string,
	data: data,
	proto: Array<any>
}
export interface data{
	count: number,
	limit: number,
	results: Array<heroi>;
}

export interface heroi{
	id: number,
	name: string,
	description: string,
	modified: Date,
	thumbnail: any
}