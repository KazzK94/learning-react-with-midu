import { useState } from 'react'
import './App.css'

import Board from './components/Board'
import Header from './components/Header'
import PlayerCards from './components/PlayerCards'

import { PLAYERS } from './helpers/players'
import { generatePlayerCards } from './helpers/cards'
import { getVictor } from './helpers/game'

import { getStoredBoard, getStoredPlayerCards, getStoredTurn, getStoredVictor, resetStorage, storeBoard, storePlayerCards, storeTurn, storeVictor } from './helpers/storage'

import confetti from 'canvas-confetti'

export default function App() {

	const [board, setBoard] = useState(() => {
		const storedBoard = getStoredBoard()
		return storedBoard ? storedBoard : new Array(9).fill(null)
	})
	const [turn, setTurn] = useState(() => {
		const storedTurn = getStoredTurn()
		return storedTurn || PLAYERS.P1
	})
	const [lastStarter, setLastStarter] = useState(PLAYERS.P1)

	const [player1Cards, setPlayer1Cards] = useState(() => {
		const storedCards = getStoredPlayerCards(1)
		return storedCards ? storedCards : generatePlayerCards(PLAYERS.P1, 6)
	})
	const [player2Cards, setPlayer2Cards] = useState(() => {
		const storedCards = getStoredPlayerCards(2)
		return storedCards ? storedCards : generatePlayerCards(PLAYERS.P2, 6)
	})

	const [selectedCardIndex, setSelectedCardIndex] = useState(-1)

	const [victor, setVictor] = useState(() => {
		return getStoredVictor() || null
	})

	// Swap turn between P1 and P2
	const swapTurn = () => {
		const nextTurn = turn === PLAYERS.P1 ? PLAYERS.P2 : PLAYERS.P1
		setTurn(nextTurn)
		storeTurn(nextTurn)
	}

	// Update the board and players' hands after playing a card. Check if game is over.
	const handleOnCardPlaced = (updatedBoard) => {
		// Set board to new board (with last card played)
		setBoard(updatedBoard)
		// Remove the card from the player's hand
		removePlayedCard()
		// Save board
		storeBoard(updatedBoard)
		// If board has no null values, game is over
		if (!updatedBoard.includes(null)) {
			// GAME ENDED
			finishGame(getVictor(updatedBoard))
		} else {
			// If game continues, swap turn
			swapTurn()
		}
	}

	const finishGame = (victor) => {
		setVictor(victor)
		storeVictor(victor)
		confetti()
	}

	// Remove card from player's hand after being played
	const removePlayedCard = () => {
		// Get Player1 or Player2 cards (depending on current turn)
		const currentPlayerCards =
			turn === PLAYERS.P1
				? [...player1Cards]
				: [...player2Cards]
		// Change the played card (in the player's hand) to null
		currentPlayerCards[selectedCardIndex] = null
		// Update the current player's cards after removing the played card
		if (turn === PLAYERS.P1) {
			setPlayer1Cards(currentPlayerCards)
			storePlayerCards(1, currentPlayerCards)
		} else if (turn === PLAYERS.P2) {
			setPlayer2Cards(currentPlayerCards)
			storePlayerCards(2, currentPlayerCards)
		}
		// Set selectedCard to no card selected (-1)
		setSelectedCardIndex(-1)
	}

	// Restart the game again
	const resetGame = () => {
		setBoard(new Array(9).fill(null))
		setPlayer1Cards(generatePlayerCards(PLAYERS.P1, 6))
		setPlayer2Cards(generatePlayerCards(PLAYERS.P2, 6))
		setVictor(null)
		const newStarter = lastStarter === PLAYERS.P1 ? PLAYERS.P2 : PLAYERS.P1
		setTurn(newStarter)
		setLastStarter(newStarter)
		resetStorage()
		storeTurn(newStarter)
	}

	return (
		<>
			<Header turn={turn} victor={victor} resetGame={resetGame} />
			<main className="game">
				<PlayerCards
					player={PLAYERS.P1}
					cards={player1Cards}
					turn={turn}
					selectedCardIndex={selectedCardIndex}
					onCardSelected={setSelectedCardIndex}
				/>
				<Board
					turn={turn}
					boardCards={board}
					selectedCard={
						selectedCardIndex === -1
							? null
							: turn === PLAYERS.P1
								? player1Cards[selectedCardIndex]
								: player2Cards[selectedCardIndex]
					}
					onCardPlaced={handleOnCardPlaced}
				/>

				<PlayerCards
					player={PLAYERS.P2}
					cards={player2Cards}
					turn={turn}
					selectedCardIndex={selectedCardIndex}
					onCardSelected={setSelectedCardIndex}
				/>
			</main>

			<br />
			<button style={{ fontSize: '2rem', padding: '1rem', borderRadius: '1rem', backgroundColor: '#666' }} onClick={resetGame}>Reset</button>
		</>
	)
}
