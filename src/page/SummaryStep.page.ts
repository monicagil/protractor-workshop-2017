import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
    private get proceedTocheckOutButton(): ElementFinder {
        return $('.cart_navigation span');
    }

    public goToProceedToCheckout(): promise.Promise<void> {
        return this.proceedTocheckOutButton.click();
    }
}
