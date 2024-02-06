import { useEffect, useState } from 'react'
import './App.css'

export default function App() {

	const [circleCursorEnabled, setCircleCursorEnabled] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	// Enable/disable EventListener for PointerMove
	useEffect(() => {
		const handlePointerMove = (e) => {
			// Move circled cursor to actual cursor position
			setMousePosition({ x: e.clientX, y: e.clientY })
		}

		if (circleCursorEnabled) {
			window.document.body.addEventListener('pointermove', handlePointerMove)
		} else {
			setMousePosition({ x: -9999, y: -9999})
		}

		// The return function of useEffect runs:
		//  -> When this component stops being rendered.
		//  -> When the dependencies change, before running the useEffect again.
		return () => {
			console.log('Clean useEffect (pointermove EventListener)')
			// Remove event listener every time we enable/disable circle cursor
			window.document.body.removeEventListener('pointermove', handlePointerMove)
		}
	}, [circleCursorEnabled])

	// Make default cursor disappear when circleCursorEnabled is true
	useEffect(() => {
		window.document.body.classList.toggle('noCursor', circleCursorEnabled)
	}, [circleCursorEnabled])

	return (<>
		<main className={circleCursorEnabled ? 'noCursor' : ''}>
			<p>El cursor circular está <em>{circleCursorEnabled ? 'activado' : 'desactivado'}</em>.</p>
			<button onClick={() => setCircleCursorEnabled(!circleCursorEnabled)}>
				{circleCursorEnabled ? 'Desactivar' : 'Activar'} cursor circular
			</button>
			<br />
			{circleCursorEnabled && <p>Posición del cursor: {JSON.stringify(mousePosition)}</p>}
		</main>
		<div className="mouseFollowerCircle" style={{
			transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
		}}></div>
	</>)
}
