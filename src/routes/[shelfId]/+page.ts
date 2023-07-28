import { SkoobService } from '$lib/skoob.services'
import type { Book } from '$lib/skoob.types'
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
	const res = await skoobService.getBooks(myId!, { shelfId: parseInt(shelfId), limit: 10 })
	if (res.success) {
		books = res.response
	} else books = []
	return {
		books
	}
}
