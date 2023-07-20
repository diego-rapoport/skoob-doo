import { SkoobService } from '$lib/skoob.services'
import { fail, json } from '@sveltejs/kit'

const skoobService = new SkoobService()
export async function GET({ params }: any) {
	const id = params.id
	const response = await skoobService.getBooks(id, { limit: 1000 }).catch((err) => {
		console.log(err)
		return fail(500, { error: true, message: 'Server Error' })
	})
	return json(response)
}
