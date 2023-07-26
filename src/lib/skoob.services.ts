import axios from 'axios'
import type { Metadata } from './skoob.types'

type RequestFilters = {
	shelfId?: number
	page?: number
	limit?: number
	year?: number
}

export class SkoobService {
	private readonly baseURL = 'https://www.skoob.com.br'
	private readonly bookcaseURL = '/v1/bookcase'
	private readonly userMiniPhotoEndpoint = 'user/user_photo_size:mini/'
	private readonly booksURL = `${this.baseURL}${this.bookcaseURL}/books`
	private readonly userMiniUrl = `${this.baseURL}/v1/${this.userMiniPhotoEndpoint}`
	private static _instance: SkoobService

	constructor() {
		if (SkoobService._instance) {
			return SkoobService._instance
		}
		SkoobService._instance = this
	}

	async logIn(email: string, senha: string) {
		const url = this.baseURL + '/login'
		const params = new URLSearchParams()
		params.append('data[Usuario][email]', email)
		params.append('data[Usuario][senha]', senha)
		// params.append('data[Login][automatico]', 'true')
		await axios
			.post(url, params, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
				// maxRedirects: 0
			})
			.catch((err) => {
				console.log('ERRO AXIOS = ', err)
				return { error: true, message: 'Server error' }
			})

		return { error: false, message: 'Logged In!' }
	}

	async getUserData() {
		const userData = await axios.get(this.userMiniUrl, {
			withCredentials: true
		})
		console.log('USER DATA = ', userData)
		if (!userData.data.success) return { error: true, message: userData.data.cod_description }
		return { error: false, data: userData.data }
	}

	async getBooks(id: number, filters?: RequestFilters): Promise<Metadata> {
		let url = `${this.booksURL}/${id.toString()}`
		if (filters) {
			Object.entries(filters).forEach(([key, value]) => {
				switch (key) {
					case 'shelfId':
						url += `/shelf_id:${value}`
						break
					case 'page':
						url += `/page:${value}`
						break
					case 'limit':
						url += `/limit:${value}`
						break
					case 'year':
						url += `/year:${value}`
						break
					default:
						break
				}
			})
		}
		console.log('FINAL URL =', url)
		const response = await axios.get<Metadata>(url)
		const data = response.data

		return data
	}

	public static getSkoobService() {
		return this._instance
	}
}
