
import { useEffect, useState } from 'react'
import { CAT_IMAGES_API_PREFIX } from '../helpers/constants'

export const useCatImage = ({ catFact }) => {
	const [catImageUrl, setCatImageUrl] = useState()
	useEffect(() => {
		if (catFact) {
			const firstThreeWords = catFact.split(' ', 3).join(' ')
			setCatImageUrl(`${CAT_IMAGES_API_PREFIX}${firstThreeWords}`)
		}
	}, [catFact])

	return { catImageUrl }
}
