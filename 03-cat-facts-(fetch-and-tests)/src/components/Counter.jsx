import { useState } from 'react'

export function Counter() {
	const [counter, setCounter] = useState(0)

	const increaseCounter = () => setCounter(counter + 1)

	return <button onClick={increaseCounter}>Counter: {counter}</button>
}
