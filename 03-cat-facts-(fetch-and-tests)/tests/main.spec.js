// @ts-check
import { test, expect } from '@playwright/test'
import { CAT_IMAGES_API_PREFIX } from '../src/helpers/constants'

const LOCALHOST_URL = 'http://localhost:5173/'

test('has title', async ({ page }) => {
	await page.goto(LOCALHOST_URL)

	// Expect a title "to contain" a string.
	await expect(page).toHaveTitle('Cat Facts')
})


test('has cat fact and image', async ({ page }) => {
	await page.goto(LOCALHOST_URL)

	const fact = await page.getByRole('paragraph')
	const image = await page.getByRole('img')

	const factText = await fact.textContent()
	const imageUrl = await image.getAttribute('src')

	await expect(factText?.length).toBeGreaterThan(0)
	await expect(imageUrl?.startsWith(CAT_IMAGES_API_PREFIX)).toBeTruthy()
})
