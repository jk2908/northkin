import { Suspense } from 'react'

import { cxx, type HomeClasses } from '@jk2908/cxx'

import { ContactForm } from '#/app/contact-form'
import { Footer } from '#/app/footer'
import { Wrapper } from '#/app/wrapper'
import { EMAIL, NAME } from '#/lib/config'

export default function Home() {
	return (
		<>
			<Wrapper className={styles.shell}>
				<h1 className="sr-only">{NAME}</h1>

				<svg
					className={styles.northkin}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 413 90"
					aria-hidden="true"
					focusable="false">
					<path
						style={{ fill: 'rgb(var(--red-500))' }}
						d="m40.704 89.6-2.56-1.92 4.864-25.344L26.88 23.68l-9.472 48c-.896 4.48-.384 7.68 2.688 9.856L2.56 89.6 0 87.68l11.392-59.264c.512-2.56 4.608-17.92.384-19.584L28.672 0l2.56 1.92-2.176 10.624 16.128 38.528 4.352-22.656c.512-2.56 4.608-17.92.384-19.584L66.816 0l2.56 1.92-13.824 69.76c-.896 4.48-.384 7.68 2.688 9.856zm64.392-9.472-25.6 9.472c-11.264-13.952-12.032-26.112-9.088-34.688 3.584-10.624 9.728-14.336 18.176-21.248l20.992-8.192c9.728 10.496 12.032 16.768 12.032 25.344 0 11.52-10.496 23.68-16.512 29.312m-13.056.384 4.864-2.048c5.376-7.552 9.216-19.968 9.216-27.008 0-6.656-1.024-12.16-5.632-18.048l-4.864 1.92c-4.608 4.096-7.552 8.192-9.984 15.872-3.072 9.984.384 23.936 6.4 29.312m32.362 9.088-2.56-1.92 8.32-42.24c.512-2.56 2.432-8.448-1.792-10.112l16.256-8.064 2.56 1.92-1.664 8.576 22.4-8.96 2.176 2.432-2.56 12.8-3.072 1.408c-4.736-5.12-7.168-7.936-9.088-7.168l-10.496 4.096-5.632 29.312c-.896 4.48-.384 7.68 2.688 9.856zm66.031-74.624 2.432 1.792-2.688 14.208 15.232-5.76-2.048 10.24c-.128.768-.768 4.48-1.28 4.48-2.304-2.432-4.864-3.2-7.936-3.2-1.536 0-3.072.256-4.864.512l-6.528 34.432c-.896 4.48-.384 7.68 2.688 9.856L167.905 89.6l-2.56-1.92 9.472-48-7.936 2.688 1.024-5.12c9.216-7.04 12.288-10.496 22.528-22.272M232.038 0l2.56 1.92-7.04 35.328 29.184-11.52 2.688 3.2-7.68 42.752c-.896 4.48-.384 7.68 2.688 9.856L236.902 89.6l-2.56-1.92 10.24-52.608-17.92 6.912-5.504 29.696c-.896 4.48-.384 7.68 2.688 9.856L206.31 89.6l-2.56-1.92 11.52-59.392c.512-2.56 4.096-17.792-.128-19.456zm53.794 34.432 14.336-5.888c.512-2.56 5.632-18.048 1.408-19.712L318.472 0l2.56 1.92-6.528 25.088-11.264 4.352 6.4 1.664 8.832 42.88c.896 4.48 3.456 5.632 6.528 7.808L310.28 89.6l-2.56-1.92-10.368-53.76-12.544 5.12-6.4 32.64c-.896 4.48-.384 7.68 2.688 9.856L263.56 89.6 261 87.68l11.392-59.264c.512-2.56 4.608-17.92.384-19.584L289.672 0l2.56 1.92zm43.031 53.248 8.832-42.24c.512-2.56 2.432-9.344-1.792-11.008l17.28-8.96 2.56 1.92-8.448 44.288c-.896 4.48-.384 7.68 2.688 9.856l-18.56 8.064zm14.08-62.592-2.56-1.92 2.944-15.872L355.871 0l2.56 1.92-2.944 15.744zm44.649 62.592 10.24-52.608-17.792 6.912-5.632 29.696c-.896 4.48-.384 7.68 2.688 9.856L359.56 89.6 357 87.68l8.32-42.24c.512-2.56 2.432-8.448-1.792-10.112l17.92-9.728 1.28 1.024-2.048 10.624L409.992 25.6l2.688 3.2L405 71.68c-.896 4.48-.384 7.68 2.688 9.856L390.152 89.6z"
					/>
				</svg>

				<p className={styles.intro}>
					Creators of <a href="https://getpitchconnect.com">PitchConnect</a>, an expansive
					multi-sport team management platform and social network. For general or product
					enquiries, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
				</p>

				<section className={styles.contact}>
					<h2 className="sr-only">Contact</h2>

					<ContactForm />
				</section>

				<Suspense fallback={null}>
					<Footer />
				</Suspense>
			</Wrapper>

			<style precedence="default" href={href}>
				{css}
			</style>
		</>
	)
}

const [css, styles, href] = cxx.tag<HomeClasses>('Home')`
  .shell {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: var(--space-10x);
    padding-block-start: var(--space-12x);
  }

  .northkin {
    block-size: auto;
    inline-size: 200px;
  }

  .intro {
    font-size: var(--text-lg);
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: var(--space-5x);
    margin-block-start: auto;
    padding-block-start: var(--space-12x);
  }

`
