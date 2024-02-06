import './Board.css'
import Card from './Card'
import { captureAdjacent } from '../helpers/moves'

export default function Board({ turn, boardCards, selectedCard, onCardPlaced }) {

	const placeCard = (card, position) => {
		if (!selectedCard) return console.warn('No card is selected')
		if (boardCards[position] === null) {
			const updatedBoardCards = [...boardCards]
			updatedBoardCards[position] = { ...card }
			captureAdjacent(card, position, updatedBoardCards, turn)
			onCardPlaced(updatedBoardCards)
		} else {
			console.warn('Nothing happened, there is already a card in that position.')
		}
	}

	return (
		<section className='board'>
			{
				boardCards.map((card, index) => {
					return <div className='tile' key={index} onClick={() => {
						placeCard(selectedCard, index)
					}}>
						{
							(card) && <Card card={card} />
						}
					</div>
				})
			}
		</section>
	)
}

