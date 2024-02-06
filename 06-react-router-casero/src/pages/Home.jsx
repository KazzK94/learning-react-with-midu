
import { Link } from '../components/Link'

export default function HomePage() {
	return (
		<>
			<h3>Inicio</h3>
			<p>Esta es la página de inicio, información inicial aquí.</p>
			<Link to="/about">Ir a Sobre Nosotros</Link>
		</>
	)
}
