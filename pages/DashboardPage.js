import { WebPage } from "./WebPage";

export class DashboardPage extends WebPage{

    constructor(page){
        super(page)
        this.laptopOption = page.locator('//a[contains(text(), "Laptops")]');
        this.sonyVaioI5 = page.locator('//a[contains(text(), "Sony vaio i7")]');
        this.addToCart = page.locator('//a[contains(text(), "Add to cart")]');
    }
 
    async addItemToCart(){
        await this.laptopOption.click();
        await this.sonyVaioI5.click();
        await this.addToCart.click();
    }
}
