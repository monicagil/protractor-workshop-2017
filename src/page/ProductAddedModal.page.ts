import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
    private get checkOutButton(): ElementFinder {
        return $('[style*="display: block;"] .button-container > a');
    }

    public goToCheckout(): promise.Promise<void> {
        return this.checkOutButton.click();
    }
}
