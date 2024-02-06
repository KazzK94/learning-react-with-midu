
export const captureAdjacent = (card, cardIndex, board, turn) => {
	if (cardIndex % 3 !== 0) {
		// To the Left
		const leftCard = board[cardIndex - 1]
		// Left vs Current
		if (leftCard !== null && card.left > leftCard.right) {
			captureCard(leftCard, cardIndex - 1, board, turn)
		}
	}
	if ((cardIndex + 1) % 3 !== 0) {
		// To the Right
		const rightCard = board[cardIndex + 1]
		// Current vs Right
		if (rightCard !== null && card.right > rightCard.left) {
			captureCard(rightCard, cardIndex + 1, board, turn)
		}

	}
	if (cardIndex >= 3) {
		// Above
		const aboveCard = board[cardIndex - 3]
		// Above
		//  vs 
		// Current
		if (aboveCard !== null && card.top > aboveCard.bottom) {
			captureCard(aboveCard, cardIndex - 3, board, turn)
		}
	}
	if (cardIndex <= 5) {
		// Below
		const belowCard = board[cardIndex + 3]
		// Card
		//  vs 
		// Current
		if (belowCard !== null && card.bottom > belowCard.top) {
			captureCard(belowCard, cardIndex + 3, board, turn)
		}
	}
}

const captureCard = (card, cardIndex, board, turn) => {
	// Don't capture cards of the current player (will do abnormal capture-chains)
	if (card.player === turn) return
	// Change owner of the card and start capture-chain with adjacents
	card.player = turn
	captureAdjacent(card, cardIndex, board, turn)
}
