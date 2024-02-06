
import { PLAYERS } from "./players"

export const getScores = (board) => {
	return {
		[PLAYERS.P1]: board.filter((card) => card.player === PLAYERS.P1).length,
		[PLAYERS.P2]: board.filter((card) => card.player === PLAYERS.P2).length
	}
}

export const getVictor = (board) => {
	const scores = getScores(board)
	return scores[PLAYERS.P1] > scores[PLAYERS.P2]
		? PLAYERS.P1
		: PLAYERS.P2
}