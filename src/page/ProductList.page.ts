import { $, browser, ElementFinder, promise } from 'protractor';

export class ProductListPage {
    private get completeOrder(): ElementFinder {
        return $('#center_column > div > p > strong');
    }

    public  getOrderText(): promise.Promise<any> {
        browser.sleep(5000);
        return this.completeOrder.getText();
    }
}
