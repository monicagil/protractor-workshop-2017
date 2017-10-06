import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
    private get paymentOption(): ElementFinder {
        return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
    }

    public goTopaymentOption(): promise.Promise<void> {
        return this.paymentOption.click();
    }
}
