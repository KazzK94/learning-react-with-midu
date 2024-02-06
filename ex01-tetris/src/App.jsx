
import './App.css'

import { Tile } from './Tile'
import { usePiece } from './hooks/usePiece'

// NOTE: if the amount of items per row (6) changes, gotta change the grid-template-columns as well
const board = [
	[null, null, null, null, null, null],
	[null, null, null, null, null, null],
	[null, null, null, null, null, null],
	[null, null, null, null, null, null],
	[null, null, null, null, null, null],
	[null, null, null, null, null, null],
	[null, null, null, null, null, null],
	[null, null, null, null, null, null],
	[null, null, null, null, null, null],
	[null, null, null, null, null, null]
]

function App() {

	const { currentPiece } = usePiece()

	return (
		<div className='board'>
			{
				board.map((row, colIndex) => {
					return row.map((tile, rowIndex) => {
						return <Tile key={`${rowIndex}-${colIndex}`} isFilled={tile !== null} />
					})
				})
			}
		</div>
	)
}

export default App
