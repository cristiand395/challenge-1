import { test, expect } from '@playwright/test'

test('First Render', async ({ page }) => {
  await page.goto('/')

  // Initial Render
  const initialFact = await page.locator('p').textContent()
  const initialImage = await page.locator('img').getAttribute('src')
  expect(initialFact).not.toBe('')
  expect(initialImage).not.toBe(null)

  // Reload Fact and Image
  await page.getByRole('button', { name: 'Reload' }).click()

  // Esperar a que el contenido del párrafo cambie
  await page.waitForFunction(
    (initialFact) => {
      const newFact = document.querySelector('p').textContent
      return newFact !== initialFact
    },
    initialFact
  )

  // Esperar a que el atributo src de la imagen cambie
  await page.waitForFunction(
    (initialImage) => {
      const newImage = document.querySelector('img').getAttribute('src')
      return newImage !== initialImage
    },
    initialImage
  )

  const newFact = await page.locator('p').textContent()
  const newImage = await page.locator('img').getAttribute('src')
  expect(newFact).not.toBe(initialFact)
  expect(newImage).not.toBe(initialImage)
})
