
import './PlayerCards.css'
import Card from "./Card"

export default function PlayerCards({ player, cards, turn, selectedCardIndex, onCardSelected }) {
	return (
		<div className="playerSide">
			<h2>{player}</h2>
			<div className="playerCards">
				{
					cards.map((card, index) => {
						return (
							<Card
								key={index}
								card={card}
								isSelected={turn === player && selectedCardIndex === index}
								onClick={() => {
									if (turn === player) {
										onCardSelected(index)
									}
								}}
							/>
						)
					})
				}
			</div>
		</div>
	)
}