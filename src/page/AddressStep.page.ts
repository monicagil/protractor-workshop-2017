import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
    private get reviewAddressButton(): ElementFinder {
        return $('#center_column > form > p > button > span');
    }

    public goToReviewAddress(): promise.Promise<void> {
        return this.reviewAddressButton.click();
    }
}
