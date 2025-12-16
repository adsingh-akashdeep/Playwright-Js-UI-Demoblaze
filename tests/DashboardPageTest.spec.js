import {test, expect} from '@playwright/test';
import {DashboardPage} from '../pages/DashboardPage'
import {LoginPage} from '../pages/LoginPage'

test.describe("Dashboard Page Tests", ()=>{
    let loginPage;
    let dashboardPage;

    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);

        await loginPage.navigateToLoginPage();
        await loginPage.doLogin("akashdeep1994","1807");
    })

    test("Verify if item is added to cart", async({page})=>{
        
          page.once("dialog", async (dialog) => {
            expect(dialog.message()).toContain("Product added.");
            await dialog.accept();
          });
          await dashboardPage.addItemToCart();
     })


})