import './Header.css'
import { PLAYERS } from '../helpers/players'

export default function Header({ turn, victor }) {

	const bgColor = victor !== null
		? victor === PLAYERS.P1 ? 'p1-bg' : victor === PLAYERS.P2 ? 'p2-bg' : ''
		: turn === PLAYERS.P1 ? 'p1-bg' : turn === PLAYERS.P2 ? 'p2-bg' : ''

	return <header className={`header  ${bgColor}`}>
		{
			victor && <><span className="bold">{victor}</span> wins the game!!</>
		}
		{
			!victor && <>Turn: <span className="bold">{turn}</span></>
		}
	</header>
}