import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
    private get acceptTermsCheck(): ElementFinder {
        return $('#cgv');
    }

    private get proceedTocheckOutButton(): ElementFinder {
        return $('#form > p > button > span');
    }

    public async acceptShipping(): Promise<void> {
        await this.acceptTermsCheck.click();
        await this.proceedTocheckOutButton.click();
    }
}
