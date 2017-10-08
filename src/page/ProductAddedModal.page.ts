import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
    private get checkOutButton(): ElementFinder {
        return $('[style*="display: block;"] .button-container > a');
    }

    public async goToCheckout(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.checkOutButton), 3000);
        await this.checkOutButton.click();
    }
}
