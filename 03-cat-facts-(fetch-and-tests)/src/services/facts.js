import { CAT_FACTS_API } from '../helpers/constants'

export function getCatFact() {
	return fetch(CAT_FACTS_API)
		.then(res => res.json())
		.then(({ fact }) => {
			return fact
		})
}
