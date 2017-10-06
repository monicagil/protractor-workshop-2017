import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
    private get buttonAddToCar(): ElementFinder {
        return $('#add_to_cart > button > span');
    }

    public goToAddToCar(): promise.Promise<void> {
        return this.buttonAddToCar.click();
    }
}
