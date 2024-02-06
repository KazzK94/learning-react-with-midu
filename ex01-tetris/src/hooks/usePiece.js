import { useState } from 'react'

export function usePiece() {
	const [currentPiece, /*setCurrentPiece*/] = useState({ tiles: [] })

	return { currentPiece: currentPiece }
}