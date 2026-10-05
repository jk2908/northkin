import React from 'react'

import { cxx, type WrapperClasses } from '@jk2908/cxx'
import { clsx } from 'clsx'

export function Wrapper({
	className,
	children,
	...rest
}: React.ComponentPropsWithRef<'div'>) {
	return (
		<>
			<div className={clsx(className, styles.wrapper)} {...rest}>
				{children}
			</div>

			<style precedence="default" href={href}>
				{css}
			</style>
		</>
	)
}

const [css, styles, href] = cxx.tag<WrapperClasses>('Wrapper')`
  .wrapper {
    inline-size: min(65ch, 100vw);
    margin-inline: auto;
    padding-inline: var(--space-4x);
  }
`
