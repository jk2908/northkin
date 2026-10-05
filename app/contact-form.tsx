'use client'

import { useActionState, useState } from 'react'

import { cxx, type ContactFormClasses } from '@jk2908/cxx'

import { send, type ContactState } from '#/app/actions'
import { Button } from '#/app/button'

const initialState: ContactState = { status: 'idle', message: '' }

export function ContactForm() {
	const [state, dispatch, pending] = useActionState(send, initialState)
	const [dismissed, setDismissed] = useState<ContactState | null>(null)

	function reset() {
		setDismissed(state)
	}

	const status = state === dismissed ? initialState : state

	return (
		<>
			<form className={styles.form} action={dispatch} onInput={reset} onFocus={reset}>
				<label className={styles.field}>
					<span className={styles.field__label}>Email</span>

					<input
						className={styles.input}
						name="email"
						type="email"
						placeholder="you@company.com"
						required
					/>
				</label>

				<label className={styles.field}>
					<span className={styles.field__label}>Message</span>

					<textarea
						className={`${styles.input} ${styles.textarea}`}
						name="message"
						placeholder="..."
						rows={4}
						minLength={10}
						required
					/>
				</label>

				<Button className={styles.button} type="submit" disabled={pending}>
					{pending ? (
						<>
							<span aria-hidden="true" className={styles.spinner} />
							Sending…
						</>
					) : (
						'Send'
					)}
				</Button>

				<p
					className={styles.status}
					role={status.status === 'error' ? 'alert' : 'status'}
					data-status={status.status}>
					{status.message}
				</p>
			</form>

			<style precedence="default" href={href}>
				{css}
			</style>
		</>
	)
}

const [css, styles, href] = cxx.tag<ContactFormClasses>('ContactForm')`
  .form {
    display: flex;
    flex-direction: column;
    gap: var(--space-6x);
    max-inline-size: 34rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--space-2x);
  }

  .field__label {
    font-size: var(--text-base);
    font-weight: 500;
  }

  .input, .textarea {
    border: 1px solid rgb(var(--blue-800));  
    border-radius: var(--radius-md);
    padding-block: var(--space-4x);
    padding-inline: var(--space-4x);

    @supports (corner-shape: squircle) {
      corner-shape: squircle;
    }

    &:focus {
      outline: 1px dashed rgb(var(--red-500));
      outline-offset: 2px;
    }
  }

  .input {
    background-color: transparent;
    color: inherit;
    font: inherit;
    line-height: 1.5;
  }

  .input::placeholder {
    color: inherit;
    opacity: 0.4;
  }

  .textarea {
    field-sizing: content;
    min-block-size: var(--space-20x);
  }

  .spinner {
    animation: spin 0.7s linear infinite;
    block-size: 1em;
    border: 2px solid currentColor;
    border-block-start-color: transparent;
    border-radius: var(--radius-rounded);
    inline-size: 1em;
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }

  .button {
    inline-size: fit-content;
  }

  .status {
    min-block-size: 1.5em;
  }

  .status[data-status='error'] {
    color: rgb(var(--red-500));
  }
`
