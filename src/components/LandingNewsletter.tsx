import { h } from 'preact'
import { useState } from 'preact/hooks'

const API_BUTTONDOWN = '84500c85-7b82-455d-b1a8-abc250a62368'

const Loading = () => (
	<svg
		class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
		fill="none"
		viewBox="0 0 24 24"
	>
		<circle
			class="opacity-25"
			cx="12"
			cy="12"
			r="10"
			stroke="currentColor"
			stroke-width="4"
		>
		</circle>
		<path
			class="opacity-75"
			fill="currentColor"
			d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		>
		</path>
	</svg>
)

const addNewSubscriber = ({ email }) => {
	const data = {
		email,
		referrer_url: 'https://retos.dev',
		tags: ['retos']
	}

	return fetch('https://api.buttondown.email/v1/subscribers', {
		method: 'POST',
		headers: {
			Authorization: `Token ${API_BUTTONDOWN}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then((res) => {
			if (!res.ok) {
				console.error(res)

				return new Response(
					JSON.stringify({ message: 'ko' }),
					{ status: 400 }
				)
			}

			return new Response(
				JSON.stringify({ message: 'ok' }),
				{ status: 200 }
			)
		})
}

const LandingNewsletter = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [completed, setCompleted] = useState(false)

	const handleSubmit = (event: h.JSX.TargetedEvent<HTMLFormElement, Event>) => {
		event.preventDefault()
		if (event.target == null) return

		setLoading(true)

		const formData = new FormData(event.target as HTMLFormElement)
		const email = formData.get('email')

		addNewSubscriber({ email })
			.then((res) => {
				if (!res.ok) throw new Error('something bad happened')
				setCompleted(true)
			})
			.catch(() => {
				setError(true)
				setTimeout(() => {
					setError(false)
				}, 5000)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	return (
		<>
			<form
				method="post"
				data-code=""
				target="_blank"
				class="relative flex items-center max-w-md mx-auto mt-12 text-center"
				onSubmit={handleSubmit}
			>
				<input
					required
					autofocus
					name="email"
					autocomplete="email"
					aria-label="email"
					aria-required="true"
					type="email"
					placeholder="Correo electrónico"
					class="border border-black overflow-hidden w-full h-12 px-6 py-2 font-medium text-indigo-900 focus:outline-none rounded-l-full bg-white/90 focus:bg-white  focus:border-indigo-700"
				/>
				<span class="relative top-0 right-0 block">
					<button
						type="submit"
						class="inline-flex items-center w-40 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-black border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700 rounded-r-full justify-center"
						data-primary="indigo-600"
					>
						{loading ? <Loading /> : '¡Me apunto!'}
					</button>
				</span>
				<input type="hidden" name="ml-submit" value="1"></input>
				<input type="hidden" name="anticsrf" value="true"></input>
			</form>
			<div class="py-2 text-center">
				{error && (
					<p class="text-red-600 py-2 font-bold text-base">
            Parece que ya estás registrado en AprendeJavaScript.dev.<br />¡No tienes que hacer nada más!
					</p>
				)}
				{completed &&
					(
						<p class="text-green-600 py-2 font-bold text-base">
							¡Te has suscrito con éxito! Revisa tu bandeja y confirma tu dirección de correo electrónico.
						</p>
					)}
			</div>
		</>
	)
}

export default LandingNewsletter
