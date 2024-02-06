
export const storeBoard = (board) => {
	window.localStorage.setItem('board', JSON.stringify(board))
}

export const storeTurn = (turn) => {
	window.localStorage.setItem('turn', turn)
}

export const storePlayerCards = (player, cards) => {
	window.localStorage.setItem(`player${player}Cards`, JSON.stringify(cards))
}

export const storeVictor = (victor) => {
	window.localStorage.setItem('victor', victor)
}

export const getStoredBoard = () => {
	return JSON.parse(window.localStorage.getItem('board'))
}

export const getStoredTurn = () => {
	return window.localStorage.getItem('turn')
}

export const getStoredPlayerCards = (player) => {
	return JSON.parse(window.localStorage.getItem(`player${player}Cards`))
}

export const getStoredVictor = () => {
	return window.localStorage.getItem('victor')
}

export const resetStorage = () => {
	window.localStorage.removeItem('board')
	window.localStorage.removeItem('turn')
	window.localStorage.removeItem('player1Cards')
	window.localStorage.removeItem('player2Cards')
	window.localStorage.removeItem('victor')
}