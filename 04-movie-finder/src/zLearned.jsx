
/* useRef():
	useRef() guarda una referencia mutable y persistente entre renderizados
	pero que al cambiar su valor NO vuelve a renderizar el Componente (a diferencia de useState())
	Puede usarse como el useState, es decir, pasándole un valor y manipulándolo luego (a través de la propiedad .current):
		-> const num = useRef(0)
		-> num.current +=10
		-> console.log(num.current) // Esto devuelve 10, y este valor persiste entre renders
	O puede usarse para asignar una referencia a un elemento del DOM
		-> const searchInputRef = useRef()
		-> <input ref={searchInputRef} />
		-> const searchText = searchInputRef.current.value // Esto retorna el texto dentro del input, sin queries al DOM
*/

import { useRef, useState } from 'react'

export function Learned() {
	console.log('Rendering Element (Learned)')
	const [counter, setCounter] = useState(0)
	const persistentNumber = useRef(0) // <-- This only runs once (initialization of the referenced value)
	persistentNumber.current += 10 // <-- This runs everytime the component is rendered, and it persists
	const inputRef = useRef()

	const handleFormSubmit = (event) => {
		event.preventDefault()
		// Use FormData to access all fields in the form element, passing the form as a parameter for the constructor
		const fields = new window.FormData(event.target) // <-- fields contiene todos los inputs dentro del <form>
		fields.forEach((field, key) => console.log(key + ': ' + field))
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column', marginTop: '4rem' }}>
			<h2 style={{ margin: 0 }}>Learned Stuff</h2>
			<h4 style={{ margin: '6px 4px 12px', fontStyle: 'italic', opacity: '0.8', fontWeight: 'normal' }}>
				useRef(), ...
			</h4>
			<input ref={inputRef} placeholder='Type something here' />
			<button onClick={() => {
				// We can refer to the input by using the reference (useRef):
				console.log('Input value is:', inputRef.current.value)
			}}
			>
				Check above input's value with a useRef() on it
			</button>

			<br />

			<button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>

			<br />

			<p>This number increases by 10 on every render (twice in dev with StrictMode):
				<strong> {persistentNumber.current}</strong>
			</p>

			<h3>Using FormData</h3>
			<form onSubmit={handleFormSubmit}>
				<input type='text' name='name' placeholder='Name' />
				<input type='text' name='lastName' placeholder='Last Name' />
				<input type='text' name='nick' placeholder='Nick' />
				<button type='submit'>Get all inputs data</button>
			</form>
		</div>
	)
}
