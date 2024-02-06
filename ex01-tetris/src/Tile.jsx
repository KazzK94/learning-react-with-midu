import './Tile.css'

export function Tile({ isFilled }) {
	return <div className={`tile ${isFilled ? 'filled' : 'empty'}`} />
}