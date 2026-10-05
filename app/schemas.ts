import * as v from 'valibot'

export const ContactSchema = v.object({
	email: v.pipe(
		v.string(),
		v.trim(),
		v.minLength(1, 'Please add your email.'),
		v.email('Please enter a valid email address.'),
	),
	message: v.pipe(
		v.string(),
		v.trim(),
		v.minLength(10, 'Your message needs to be at least 10 characters.'),
	),
})

export type Contact = v.InferOutput<typeof ContactSchema>
