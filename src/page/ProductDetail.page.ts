import { $, browser, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
    private get addToCarButton(): ElementFinder {
        return $('#add_to_cart');
    }

    public goToAddToCar(): promise.Promise<void> {
        browser.sleep(5000);
        return this.addToCarButton.click();
    }
}
