'use server'

import { Eusend } from '@eusend_dev/sdk'
import * as v from 'valibot'

import { ContactSchema } from '#/app/schemas'
import { EMAIL, NAME } from '#/lib/config'

export type ContactState = {
	status: 'idle' | 'success' | 'error'
	message: string
}

export async function send(
	_prevState: ContactState,
	formData: FormData,
): Promise<ContactState> {
	const result = v.safeParse(ContactSchema, {
		email: formData.get('email'),
		message: formData.get('message'),
	})

	if (!result.success) {
		return {
			status: 'error',
			message: result.issues[0]?.message ?? 'Please check your details.',
		}
	}

	const apiKey = process.env.EUSEND_API_KEY

	if (!apiKey) {
		return { status: 'error', message: 'Email is not configured yet.' }
	}

	const eusend = new Eusend(apiKey)

	const { error } = await eusend.emails.send({
		from: `${NAME} <${EMAIL}>`,
		to: EMAIL,
		replyTo: result.output.email,
		subject: `New enquiry from ${result.output.email}`,
		text: result.output.message,
	})

	if (error) {
		console.error('[contact] eusend send failed', error)

		return {
			status: 'error',
			message: 'Something went wrong. Please try again or email us instead.',
		}
	}

	return { status: 'success', message: 'Thanks, we’ll be in touch.' }
}
