import {test, expect} from '@playwright/test';
import {DashboardPage} from '../pages/DashboardPage'
import {LoginPage} from '../pages/LoginPage'

test.describe('Dashboard Page Tests',{
  tag:['@regression','@smoke']
}, ()=>{
    let loginPage;
    let dashboardPage;

    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);

        await loginPage.navigateToLoginPage();
        await loginPage.doLogin("akashdeep1994", "1807");
    })

    test.skip('Verify if item is added to cart',{tag:'@p0'} , async({page})=>{
          page.once("dialog", async (dialog) => {
            expect(dialog.message()).toContain("Product added.");
            await dialog.accept();
          });
          await dashboardPage.addSonyVaioI7ToCart();
     })

    test('Verify user can send a message successfully via contact form ',{tag: '@p1'},async({page})=>{
         page.once("dialog",async(dialog)=>{
          expect(dialog.message()).toContain("Thanks for the message!!");
          await dialog.accept();
         })
        await dashboardPage.sendNewMessageViaContactForm();
    })

    test.only('Place the order from cart page', {tag:'@p2'}, async({page})=>{
        page.once("dialog", async(dialog)=>{
          expect(dialog.message()).toContain("Product added.")
          await dialog.accept();
        })
        await dashboardPage.addSonyVaioI7ToCart();
        await dashboardPage.placeAnOrder();

        const paymentInfo = page.locator("p.lead.text-muted");
        await expect(paymentInfo).toBeVisible();
        await expect(paymentInfo).toContainText('Id:');
        await expect(paymentInfo).toContainText('Amount:');
        await expect(paymentInfo).toContainText('Name:');

        await page.locator('//button[contains(text(), "Place Order")]').click();
    })
    
     })
        