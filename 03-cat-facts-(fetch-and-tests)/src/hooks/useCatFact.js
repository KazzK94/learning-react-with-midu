import { useEffect, useState } from 'react'
import { getCatFact } from '../services/facts'

export const useCatFact = () => {
	const [catFact, setCatFact] = useState() // <-- El useState da el valor null por defecto

	const refreshCatFact = () => {
		getCatFact()
			.then(setCatFact)
	}

	useEffect(refreshCatFact, [])

	return { catFact, refreshCatFact }
}
