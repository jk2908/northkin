import React from 'react'

import { dynamic } from '@jk2908/solas/server'

import { cxx, type FooterClasses } from '@jk2908/cxx'
import { clsx } from 'clsx'

import { NAME } from '#/lib/config'

export async function Footer({
	className,
	...rest
}: React.ComponentPropsWithRef<'footer'>) {
	await dynamic()

	// oxlint-disable-next-line react/purity
	const year = new Date().getFullYear()

	return (
		<>
			<footer className={clsx(styles.footer, className)} {...rest}>
				<span>
					Copyright {year} {NAME}
				</span>

				<img src="/icon-dark.svg" width={29} height={20} alt="" className={styles.nk} />
			</footer>

			<style precedence="default" href={href}>
				{css}
			</style>
		</>
	)
}

const [css, styles, href] = cxx.tag<FooterClasses>('Footer')`
  .footer {
		align-items: center;
		display: flex;
    border-block-start: 1px dashed rgb(var(--blue-800) / 0.35);
    font-size: var(--text-sm);
    padding-block: var(--space-4x);
		position: relative;
  }

	.nk {
		margin-inline-start: auto;
	}	
`
