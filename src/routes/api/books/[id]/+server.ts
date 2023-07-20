import { SkoobService } from '$lib/skoob.services'
import { json } from '@sveltejs/kit'

const skoobService = new SkoobService()
export async function GET({ params }: any) {
	const id = params.id
	const response = await skoobService.getBooks(id, { limit: 1000 })
	return json(response)
}
