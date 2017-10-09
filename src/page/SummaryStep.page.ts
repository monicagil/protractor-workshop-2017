import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
    private get proceedTocheckOutButton(): ElementFinder {
        return $('.standard-checkout');
    }

    public goToProceedToCheckout(): promise.Promise<void> {
        return this.proceedTocheckOutButton.click();
    }
}
