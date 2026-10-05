import React from 'react'

import { cxx } from '@jk2908/cxx'
import { clsx } from 'clsx'

type Variant = 'primary' | 'secondary' | 'tertiary'
type Size = 'lg' | 'md' | 'sm'

type ButtonProps = {
	variant?: Variant
	size?: Size
} & React.ComponentPropsWithRef<'button'>

export function Button({
	children,
	className,
	variant = 'primary',
	size = 'md',
	...rest
}: ButtonProps) {
	return (
		<>
			<button
				className={clsx(styles.button, className)}
				data-variant={variant}
				data-size={size}
				{...rest}>
				{children}
			</button>

			<style precedence="default" href={href}>
				{css}
			</style>
		</>
	)
}

const [css, styles, href] = cxx.tag('Button')`
  .button {
    appearance: none;
    background-color: rgb(var(--button-bg, var(--red-500)));
    border: 1px solid rgb(var(--blue-800));
    border-radius: var(--radius-md);
    color: rgb(var(--button-text-colour, var(--grey-200)));
    font: inherit;
    outline-offset: 2px;
    padding-block: var(--button-py, var(--space-2x));
    padding-inline: var(--button-px, var(--space-4x));

    @supports (corner-shape: squircle) {
      corner-shape: squircle;
    }

    &:active {
      outline: 1px dashed rgb(var(--red-500));
      outline-offset: 2px;
    }

    &:is(:disabled, [aria-disabled=true]) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  .button[data-size=sm] {
    --button-py: var(--space);
    --button-px: var(--space-2x);
  }

  .button[data-size=md] {
    --button-py: var(--space-2x);
    --button-px: var(--space-4x);
  }

  .button[data-size=lg] {
    --button-py: var(--space-3x);
    --button-px: var(--space-6x);
  }

  .button[data-variant=primary] {
    --button-bg: var(--red-500);
    --button-text-colour: var(--grey-200);

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        --button-bg: var(--blue-800);
        --button-text-colour: var(--grey-200);
      }
    }
  }
`
