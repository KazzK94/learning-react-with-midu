
import './App.css'

import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage.js'

export default function App() {
	const { catFact, refreshCatFact } = useCatFact()
	const { catImageUrl } = useCatImage({ catFact })

	return (
		<>
			<h1>Cat Facts</h1>
			<button onClick={refreshCatFact}>Change fact</button>
			<br />
			<p>{catFact ?? 'Loading cat fact...'}</p>
			{catImageUrl && <img src={catImageUrl} alt={`Cat Image with the words ${catFact.split(' ', 3)}`} />}
		</>
	)
}
