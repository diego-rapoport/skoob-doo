import { SkoobService } from '$lib/skoob.services'
import type { Book, PagingMetaData } from '$lib/skoob.types'
import { id } from '../stores'

export async function load({
	params
}: {
	params: {
		shelfId: string
	}
}) {
	let myId: number
	id.subscribe((val) => {
		if (val) myId = val
	})
	const skoobService = new SkoobService()
	const shelfId = params.shelfId
	let books: Book[] = []
	let meta: PagingMetaData

	const res = await skoobService.getBooks(myId!, { shelfId: parseInt(shelfId), limit: 10 })
	if (res.success) {
		books = res.response
		meta = res.paging
	} else books = []
	return {
		books,
		meta
	}
}
