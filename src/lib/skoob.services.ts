type RequestFilters = {
	shelfId?: number
	page?: number
	limit?: number
	year?: number
}

export class SkoobService {
	private readonly baseURL = 'https://www.skoob.com.br'
	private readonly bookcaseURL = '/v1/bookcase'
	private readonly booksURL = `${this.baseURL}/${this.bookcaseURL}/books`

	async getBooks(id: number, filters?: RequestFilters) {
		let url = `${this.booksURL}/${id.toString()}`
		if (filters) {
			switch (filters) {
				case filters.shelfId:
					url += `/shelf_id:${filters.shelfId}`
					break
				case filters.page:
					url += `/page:${filters.page}`
					break
				case filters.limit:
					url += `/limit:${filters.limit}`
					break
				case filters.year:
					url += `/year:${filters.year}`
					break
				default:
					break
			}
		}
		const response = await fetch(url, {
			method: 'GET'
		})
		const data = await response.json()

		return data
	}
}
