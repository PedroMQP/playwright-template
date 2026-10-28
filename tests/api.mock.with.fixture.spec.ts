import { expect } from '@playwright/test';
import { test } from '../fixtures/mixed';

test.describe('Mock products API', () => {
    const apiUrl = "https://dummyjson.com/products";

    test('Show 1 mocked element @mock @mixed', async ({po,setResponse}) => {
        // Interceptamos la llamada real que hará el navegador a dummyjson
       await setResponse({success:"OK"}, 201)
        // Hacemos el fetch desde la página o app
        const response = await po.page.goto(apiUrl);
        
        // Verificamos que el contenido devuelto sea exactamente nuestro mock
        await expect(po.page.getByText('ok')).toBeVisible();
    });

    test('Fail products API @mock', async ({ page }) => {
        

        await page.goto(apiUrl);
        await expect(page.getByText('Unavailable server')).toBeVisible();
    });
});