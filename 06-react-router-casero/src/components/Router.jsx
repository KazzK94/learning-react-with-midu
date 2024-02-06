
import { useState, useEffect } from 'react'
import { EVENTS } from '../consts'
import appRoutes from '../routes'

function NotFoundPage() {
	return <h2>404: Not Found</h2>
}

export function Router() {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	useEffect(() => {
		const changeLocation = () => {
			setCurrentPath(window.location.pathname)
		}
		window.addEventListener(EVENTS.PUSH_STATE, changeLocation)
		window.addEventListener(EVENTS.POP_STATE, changeLocation)
		// popstate -> Evento que ocurre cuando vamos hacia atrás en navegación web

		return () => {
			window.removeEventListener(EVENTS.PUSH_STATE, changeLocation)
			window.addEventListener(EVENTS.POP_STATE, changeLocation)
		}
	}, [])

	const currentRoute = appRoutes.find(route => route.path === currentPath)
	console.log({ currentPath, currentRoute })
	const Page = currentRoute?.Component

	return Page ? <Page /> : <NotFoundPage />

}
