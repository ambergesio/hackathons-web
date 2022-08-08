import { ComponentChildren } from 'preact'

const COLORS = {
	default: '',
	discord:
    'text-white bg-[#5865F2] hover:bg-blue-500 focus:border-blue-800  active:bg-blue-800',
	youtube:
    'text-white bg-red-500 hover:bg-red-800 focus:border-blue-800  active:bg-blue-800',
	twitch:
    'text-white bg-purple-700 hover:bg-purple-500 focus:border-purple-800  active:bg-purple-800'
}

type LinkPillProps = {
  color?: 'twitch' | 'default' | 'youtube' | 'discord';
  href: string;
  newTab: boolean;
  children: ComponentChildren;
};

export const LinkPill = (
	{ color = 'default', href, newTab, children }: LinkPillProps
) => {
	const target = newTab ? '_blank' : undefined
	const rel = newTab ? 'noopener noreferrer' : undefined
	const classColors = COLORS[color] ?? COLORS.default

	return (
		<a
			href={href}
			target={target}
			rel={rel}
			class={`inline-flex items-center justify-center px-4 py-2 gap-x-2 text-xs leading-6 whitespace-no-wrap transition font-bold duration-150 ease-in-out rounded-full  lg:text-base xl:text-lg ${classColors}`}
		>
			{children}
		</a>
	)
}
