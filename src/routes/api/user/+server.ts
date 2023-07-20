import { SkoobService } from '$lib/skoob.services'
import { fail, json } from '@sveltejs/kit'

const skoobService = new SkoobService()
export async function GET() {
	const data = await skoobService.getUserData()
	if (data.error) return fail(402, data.message)
	return json(data.data)
}
