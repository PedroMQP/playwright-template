import { test, expect } from '@playwright/test';

test.describe('Mock products API', () => {
    const apiUrl = "https://dummyjson.com/products";

    test('Show 1 mocked element @mock', async ({ page }) => {
        // Interceptamos la llamada real que hará el navegador a dummyjson
        await page.route('**/products', async (route) => {
            const mockData = {
                products: [
                    { id: 1, title: 'Producto Mockeado de Prueba', price: 99.99 }
                ],
                total: 1
            };

            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(mockData)
            });
        });

        // Hacemos el fetch desde la página o app
        const response = await page.goto(apiUrl);
        
        // Verificamos que el contenido devuelto sea exactamente nuestro mock
        await expect(page.getByText('Producto Mockeado de Prueba')).toBeVisible();
    });

    test('Fail products API @mock', async ({ page }) => {
        await page.route('**/products', async (route) => {
            await route.fulfill({
                status: 500,
                contentType: 'application/json',
                body: JSON.stringify({ error: "Unavailable server" })
            });
        });

        await page.goto(apiUrl);
        await expect(page.getByText('Unavailable server')).toBeVisible();
    });
});