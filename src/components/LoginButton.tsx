import { useEffect, useState } from 'preact/hooks'
import { supabase } from '../lib/supabase.js'

type User = {
  avatar: string,
  userName: string,
  name: string,
  email: string
}

const extractInfoFrom = (rawUser): User => {
	const userData = rawUser?.identities?.[0]?.identity_data
	if (!userData) return null

	const { user_name: userName, name, email } = userData
	const avatar = `https://unavatar.io/github/${userName}`

	return { avatar, userName, name, email }
}

const gitHubIcon = (
	<svg class="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
)

const logoutIcon = (
	<svg class='w-5 h-5' stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 12H19M19 12L16 15M19 12L16 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
)

export function LoginButton () {
	const [user, setUser] = useState<User>(null)

	useEffect(() => {
		const rawUser = supabase.auth.user()
		const newUser = extractInfoFrom(rawUser)
		setUser(newUser)

		const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
			const newUser = extractInfoFrom(session?.user)
			setUser(newUser)
		})

		return () => listener?.unsubscribe()
	}, [])

	const login = async () => {
		const { error } = await supabase.auth.signIn({
			provider: 'github'
		}, {
			scopes: 'repo'
		})

		// TODO: Send this error to somewhere more useful!!! 🤣
		if (error) console.error(error)
	}

	const logout = async () => {
		const { error } = await supabase.auth.signOut()
		// TODO: Send this error to somewhere more useful!!! 🤣
		if (error) console.error(error)
	}

	if (user === undefined) return <div />
	if (user !== null) {
		return (
			<div class='flex items-center gap-2'>
				<img class='w-6 h-6 rounded-3xl' src={user.avatar} />
				<strong>{user.userName}</strong>
				<button onClick={logout}>
					{logoutIcon}
				</button>
			</div>
		)
	}

	return (
		<a href="#_" class="bg-black gap-x-2 text-white px-4 rounded-full border-0 leading-none py-2 flex items-center gap-1" onClick={login}>
			{gitHubIcon}
      Iniciar sesión
		</a>
	)
}
