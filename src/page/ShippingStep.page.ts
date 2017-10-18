import { $, browser, ElementFinder } from 'protractor';

export class ShippingStepPage {
    private get acceptTermsCheck(): ElementFinder {
        return $('#cgv');
    }

    private get proceedTocheckOutButton(): ElementFinder {
        return $('[name="processCarrier"]');
    }

    public async acceptShipping(): Promise<void> {
        browser.sleep(5000);
        await this.acceptTermsCheck.click();
        await this.proceedTocheckOutButton.click();
    }
}
