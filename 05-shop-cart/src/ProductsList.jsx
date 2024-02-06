
import './ProductsList.css'

import { BsCartPlus } from 'react-icons/bs'

import productsData from './mocks/products.json'


export function ProductsList() {
	// Obtained from a mock json
	const products = productsData.products.slice(0, 20)

	return (
		<ul>
			{
				products.map((product) => {
					return (
						<li key={product.id}>
							<h3>{product.title}</h3>
							<img src={product.images[0]} alt={`Image of a ${product.title}`} />
							<button>
								<BsCartPlus />
							</button>
						</li>
					)
				})
			}
		</ul>
	)
}
