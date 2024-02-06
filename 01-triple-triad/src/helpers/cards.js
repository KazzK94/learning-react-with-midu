import { getRandomNumber } from "./utils"

export const generateCard = (player) => {
	return {
		player: player,
		top: Math.floor(getRandomNumber(1, 9)),
		right: Math.floor(getRandomNumber(1, 9)),
		bottom: Math.floor(getRandomNumber(1, 9)),
		left: Math.floor(getRandomNumber(1, 9))
	}
}

export const generatePlayerCards = (player, amount) => {
	const playerCards = []
	for (let i = 0; i < amount; i++) {
		playerCards[i] = generateCard(player)
	}
	return playerCards
}