import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
    private get reviewAddressButton(): ElementFinder {
        return $('[name="processAddress"]');
    }

    public goToReviewAddress(): promise.Promise<void> {
        return this.reviewAddressButton.click();
    }
}
