import { useEffect, useState } from 'react'
import './App.css'

import { CIRCLE_HIDDEN_POSITION } from './helpers/constants.js'

export default function App() {

	const [circleCursorEnabled, setCircleCursorEnabled] = useState(false)
	const [mousePosition, setMousePosition] = useState(CIRCLE_HIDDEN_POSITION)

	const handlePointerMove = (e) => {
		// Move circled cursor to actual cursor position
		setMousePosition({ x: e.clientX, y: e.clientY })
	}

	// Enable/disable EventListener for PointerMove
	useEffect(() => {
		if (circleCursorEnabled) {
			// If using circleCursor, every mouse movement needs to be captured (event 'pointermove') to update the circleCursor position
			window.document.body.addEventListener('pointermove', handlePointerMove)
		} else {
			// If not using circleCursor, we don't need to capture anything, just hide the circle
			setMousePosition(CIRCLE_HIDDEN_POSITION)
		}

		// The return function of useEffect runs in these cases:
		//  -> When this component stops being rendered.
		//  -> When the dependencies of the useEffect() change (it runs before starting the next render).
		return () => {
			console.log('Clean useEffect (pointermove EventListener)')
			// Remove event listener every time we enable/disable circle cursor
			window.document.body.removeEventListener('pointermove', handlePointerMove)
		}
	}, [circleCursorEnabled])

	useEffect(() => {
		// Hide cursor when circleCursor is showing up (via the class 'noCursor')
		window.document.body.classList.toggle('noCursor', circleCursorEnabled)
	}, [circleCursorEnabled])

	return (<>
		<main>
			<p>El cursor circular está <strong className='relevant'>{circleCursorEnabled ? 'activado' : 'desactivado'}</strong>.</p>
			<button
				onClick={(event) => {
					handlePointerMove(event)
					setCircleCursorEnabled(!circleCursorEnabled)
				}}
			>
				{circleCursorEnabled ? 'Desactivar' : 'Activar'} cursor circular
			</button>
			<br />
			{
				circleCursorEnabled && (
					<p className='cursorPositionInfo'>
						Posición del cursor: {JSON.stringify(mousePosition)}
					</p>
				)
			}
		</main>
		<div
			className="mouseFollowerCircle"
			style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
		/>
	</>)
}
