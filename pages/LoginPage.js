import { WebPage } from "./WebPage";

export class LoginPage extends WebPage {
  constructor(page) {
    super(page);
    this.loginOption = page.locator("#login2");
    this.usernameInput = page.locator("#loginusername");
    this.passwordInput = page.locator("#loginpassword");
    this.loginButton = page.locator('//button[contains(text(),"Log in")]');
  }

  async navigateToLoginPage() {
    await this.page.goto("https://demoblaze.com/");
    await this.loginOption.click();
  }

  async doLogin(username, password) {
    await this.usernameInput.waitFor({state: 'visible'});
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.loginButton.click();
  }

}
