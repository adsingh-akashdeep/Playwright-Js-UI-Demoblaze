import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test.describe('Login Page Tests',{tag:['@regression','@smoke']}, () => {
    let loginPage;

    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page);
        loginPage.navigateToLoginPage();
    })

    test('Successful login with credentials',{tag:'@p0'}, async({page})=>{
        await loginPage.doLogin('akashdeep1994','1807');
        await expect(page).toHaveURL('https://demoblaze.com/');
    })

    test('Failed login with invalid credentials',{tag: '@p1'}, async({page}) => {
        await loginPage.doLogin("Gregoire", "123456");
        page.once("dialog", async (dialog) => {
          expect(dialog.message()).toContain("Please fill out Username and Password."); // or expected text
          await dialog.accept(); // close popup
        });
    })

    test('Failed login with empty credential fields',{tag:'@p2'}, async({page})=>{
       await loginPage.doLogin("", "");  
      page.once("dialog", async (dialog) => {
          expect(dialog.message()).toContain("Please fill out Username and Password."); // adjust text
          await dialog.accept();
        });
       
    })
    
})