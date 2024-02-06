
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import { Router } from '../src/components/Router'

describe('Router', () => {
	beforeEach(() => {
		cleanup()
	})

	it('should render Home (Inicio in Spanish) by default', () => {
		render(<Router />)
		expect(screen.getByText('Inicio')).toBeTruthy()
	})

	it('should render About (Sobre Nosotros in Spanish)', () => {
		window.location.pathname = '/about'
		render(<Router />)
		expect(screen.getByText('Sobre Nosotros')).toBeTruthy()
	})

	it('should navigate to About when clicking on the link', () => {
		window.location.pathname = '/'
		render(<Router />)
		screen.getByText(/Ir a Sobre Nosotros/).click()
		expect(screen.findByText('Sobre Nosotros')).toBeTruthy()
	})

	it('should render 404 when using a non-existent route', () => {
		window.location.pathname = '/NonExistentRoute'
		render(<Router />)
		expect(screen.getByText(/404/)).toBeTruthy()
		expect(screen.getByText(/Not Found/)).toBeTruthy()
	})

})
