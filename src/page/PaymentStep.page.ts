import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
    private get paymentOption(): ElementFinder {
        return $('.bankwire');
    }

    public goTopaymentOption(): promise.Promise<void> {
        return this.paymentOption.click();
    }
}
