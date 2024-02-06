
import { EVENTS } from '../consts'

function navigate(href) {
	window.history.pushState({}, '', href)
	const navigationEvent = new Event(EVENTS.PUSH_STATE)
	window.dispatchEvent(navigationEvent)
}

export function Link({ to, target, ...props }) {
	const handleClick = (event) => {
		const isMainEvent = event.button === 0 // Check if event was triggered by primary click (default: left click)
		const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey // Check if user was holding a modifier key
		const isLocalEvent = target === undefined || target === '_self' // Check if target is _self (undefined defaults it to _self)

		if (isMainEvent && isLocalEvent && !isModifiedEvent) {
			// isMainEvent: Event triggered with primary click (default: left click)
			// isLocalEvent: Without target="blank" or similar
			// !isModifiedEvent: NOT holding any modifier keys (Ctrl, Alt, Shift...)
			event.preventDefault()
			navigate(to) // <-- SPA Navigation
		}
	}
	return <a href={to} target={target} onClick={handleClick} {...props} />
}
