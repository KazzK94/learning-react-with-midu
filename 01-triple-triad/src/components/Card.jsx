import './Card.css'
import { PLAYERS } from '../helpers/players'

export default function Card({ card, isSelected, onClick }) {

	return (
		card && <div
			className={`card
				${card.player === PLAYERS.P1 ? ' p1-bg' : card.player === PLAYERS.P2 ? ' p2-bg' : ''}
				${isSelected ? ' selected' : ''}
				`}
			onClick={onClick}
		>
			<span className='topNumber'>{card.top}</span>
			<span className='rightNumber'>{card.right}</span>
			<span className='bottomNumber'>{card.bottom}</span>
			<span className='leftNumber'>{card.left}</span>
		</div>

	)
}

