import { SkoobService } from '$lib/skoob.services'
import type { Book } from '$lib/skoob.types'

export async function load({
	params
}: {
	params: {
		id: string
	}
}) {
	const skoobService = new SkoobService()
	const id = params.id
	let books: Book[] = []
	const res = await skoobService.getBooks(8712917, { shelfId: parseInt(id), limit: 10 })
	if (res.success) {
		books = res.response
	} else books = []
	return {
		books
	}
}
