type TempoLeitura = {
	dias: number
	horas: number
	minutos: number
	segundos: number
}

type Edicao = {
	id: number
	livro_id: number
	titulo: string
	nome_portugues: string
	subtitulo: string
	subtitulo_portugues: string
	idioma: string
	mes: string
	ano: number
	volume: string
	serie: string
	autor: string
	isbn: number
	paginas: number
	edicao: number
	editora: string
	sinopse: string
	capitulo_url: string
	capa_grande: string
	capa_media: string
	capa_pequena: string
	capa_mini: string
	capa_micro: string
	capa_nano: string
	img_url: string
	url: string
	tempo_leitura: TempoLeitura
}

export type Book = {
	id: number
	livro_id: number
	ranking: number
	tipo: number
	favorito: number
	desejado: number
	troco: number
	tenho: number
	emprestei: number
	paginas: number
	dt_resenha: string
	paginas_lidas: number
	dt_leitura: string
	meta: number
	spoiler: number
	media: number
	edicao: Edicao
}

type PagingMetadata = {
	total: number
	page_count: number
	page: number
	next_page: boolean
	prev_page: boolean
	limit: number
	first_item: number
	last_item: number
}

export type Metadata = {
	success: boolean
	paging: PagingMetadata
	response: Book[]
}
