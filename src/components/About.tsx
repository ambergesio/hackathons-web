/** @jsx h */
import { LinkPill } from './LinkPill'
import { TwitchIcon } from './TwitchIcon'
import { DiscordIcon } from './DiscordIcon'
import { YouTubeIcon } from './YouTubeIcon'

export const About = () => {
	return (
		<section class="pt-16 lg:pb-60 xl:px-0 px-10">
			<div id="about" class="pt-8 max-w-5xl px-4 mx-auto">
				<div class="flex lg:flex-row flex-col-reverse items-center">
					<div class="w-full max-w-md mt-24 transform translate-y-10 lg:mt-0 px-4 mb-12 lg:mb-0 relative">
						<div class="order-2 absolute inset-0 lg:pr-24 pb-20">
							<div class="border border-black w-full h-full bg-gradient-to-br from-blue-200 to-blue-500 rounded-2xl">
							</div>
						</div>
						<img
							class="order-1 mx-auto object-cover rounded-lg lg:-ml-10 transform z-40 -translate-y-20"
							src="/yo.webp"
							alt="Fotografía de midudev sujetando una taza y un teclado"
							style="drop-shadow(2px 4px 36px rgba(255, 255, 0, .3))"
						/>
					</div>

					<div class="w-full px-4">
						<div class="relative lg:max-w-none max-w-md mx-auto -mt-10">
							<svg
								class="w-16 h-16 animate-wave"
								viewBox="0 0 72 72"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="#FCEA2B"
									d="M18.657 19.24a3.531 3.531 0 1 0-5.563 4.25l11.533 15.1 2.688 3.387-7.89-10.331a3.531 3.531 0 1 0-5.564 4.249l7.891 10.331 6.27 7.899c5.468 6.273 14.515 5.93 20.787.465a19.617 19.617 0 0 0 6.515-12.31c.386-4.233.807-15.301.807-15.301-.182-2.601-3.135-4.524-3.515-3.18l-4.894 9.757-3.366-4.223 3.366 4.223-3.366-4.223-13.465-17.208a3.531 3.531 0 1 0-5.563 4.249l4.249 5.563L36 30.417l-13.419-17.68a3.531 3.531 0 1 0-5.563 4.248L31.689 36"
								/>
								<g
									fill="none"
									stroke="#000"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								>
									<path d="M18.657 19.24a3.531 3.531 0 1 0-5.563 4.25l11.533 15.1 2.688 3.387-7.89-10.331a3.531 3.531 0 1 0-5.564 4.249l7.891 10.331 6.27 7.899c5.468 6.273 14.515 5.93 20.787.465a19.617 19.617 0 0 0 6.515-12.31c.386-4.233.807-15.301.807-15.301-.182-2.601-3.135-4.524-3.515-3.18l-4.894 9.757-3.366-4.223 3.366 4.223-3.366-4.223-13.465-17.208a3.531 3.531 0 1 0-5.563 4.249l4.249 5.563L36 30.417l-13.419-17.68a3.531 3.531 0 1 0-5.563 4.248L31.689 36" />
									<path
										stroke-miterlimit="10"
										d="M11.673 42.872c0 2.566 1.747 4.643 3.905 4.643M7.061 42.437c0 5.596 3.81 10.124 8.517 10.124M45.262 21.238c0-2.567-1.747-4.643-3.906-4.643M49.873 21.673c0-5.596-3.81-10.124-8.517-10.124"
									/>
								</g>
							</svg>
							<h2 class="mb-4 text-4xl xl:text-5xl font-bold leading-tight">
                ¡Yo crearé los retos!
							</h2>
							<p class="mb-9 text-base xl:text-lg text-gray-900 leading-loose">
                Tengo más de 15 años de experiencia en el mundo de la
                Programación Web. He creado diversos cursos en plataformas como
                Udemy y Platzi. Me encanta compartir conocimiento y quiero
                retarte a mejorar tu lógica de programación.
							</p>
							<p class="text-2xl font-bold">Miguel Ángel Durán</p>
							<p class="text-lg text-black/60">
                Creador de contenido de programación
							</p>

							<div class="flex flex-col mt-4 gap-y-4">
								<div>
									<LinkPill
										color="twitch"
										href="https://twitch.tv/midudev"
										newTab
									>
										<TwitchIcon class="w-6 h-6" />
                    Sígueme en Twitch
									</LinkPill>
								</div>
								<div>
									<LinkPill color="youtube" href="https://midu.tube" newTab>
										<YouTubeIcon class="w-6 h-6" />
                    Descubre mi contenido en YouTube
									</LinkPill>
								</div>
								<div>
									<LinkPill
										color="discord"
										href="https://discord.gg/midudev"
										newTab
									>
										<DiscordIcon class="w-6 h-6" />
                    Entra a la comunidad de Discord
									</LinkPill>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
