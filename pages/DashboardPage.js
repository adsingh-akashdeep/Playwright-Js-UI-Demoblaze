import { WebPage } from "./WebPage";

export class DashboardPage extends WebPage{

    constructor(page){
        super(page)
        this.laptopOption = page.locator('//a[contains(text(), "Laptops")]');
        this.sonyVaioI7 = page.locator('//a[contains(text(), "Sony vaio i7")]');
        this.addToCart = page.locator('//a[contains(text(), "Add to cart")]');
        this.aboutUsOption = page.locator('a.nav-link[data-target="#videoModal"]');
        this.contactOption = page.locator('//a[contains(text(),"Contact")]');
        this.contactEmailInput = page.locator('#recipient-email');
        this.contactNameInput = page.locator('#recipient-name');
        this.messageInput = page.locator('#message-text');
        this.sendMessageButton  = page.locator('[onclick="send()"]')
        this.cartOption = page.locator('//a[contains(text(), "Cart")]');
        this.placeOrderOption = page.locator('button[data-target="#orderModal"]');
        this.nameInputInPlaceOrder = page.locator('#name');
        this.countryInputInPlaceOrder = page.locator("#country");
        this.cityInputInPlaceOrder = page.locator('#city');
        this.creditCardInPlaceOrder = page.locator('#card');
        this.monthInPlaceOrder = page.locator('#month');
        this.yearInPlaceOrder = page.locator('#year');
        this.purchaseOption = page.locator(
          '//button[contains(text(), "Place Order")]'
        );
        this.okButton = page.locator('button[class="confirm btn btn-lg btn-primary"]')
    }
 
    async addSonyVaioI7ToCart(){
        await this.laptopOption.click();
        await this.sonyVaioI7.click();
        await this.addToCart.click();
    }

    async sendNewMessageViaContactForm(){
      await this.contactOption.click();
      await this.contactEmailInput.type('abc@def.com')
      await this.contactNameInput.type('abc singh')
      await this.messageInput.type('this message is just for testing the contact form')
      await this.sendMessageButton.click()
    }

    async placeAnOrder(){
        await this.cartOption.click();
        await this.placeOrderOption.click();
        await this.nameInputInPlaceOrder.waitFor({state: 'visible'})
        await this.nameInputInPlaceOrder.type('Ram');
        await this.countryInputInPlaceOrder.type('India');
        await this.cityInputInPlaceOrder.type('New-york');
        await this.creditCardInPlaceOrder.type('4328 3432 3433');
        await this.monthInPlaceOrder.type('July');
        await this.yearInPlaceOrder.type('2020');
        await this.purchaseOption.waitFor({state: 'visible'});
        await this.purchaseOption.click();
    }
}
