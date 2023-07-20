import { SkoobService } from '$lib/skoob.services'
import { fail, json } from '@sveltejs/kit'

const skoobService = new SkoobService()
export async function POST({ request }: { request: Request }) {
	const form = await request.formData()
	const email = form.get('email')?.toString()
	const senha = form.get('senha')?.toString()
	if (!email || !senha) return fail(402, { error: true, message: 'Email or senha missing' })
	const res = await skoobService.logIn(email, senha).catch((_) => {
		return fail(500, { error: true, message: 'Server Error' })
	})
	return json(res)
}
