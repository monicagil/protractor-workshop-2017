import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
    private get selectButton(): ElementFinder {
        return $('.product_img_link');
    }

    public goToSelect(): promise.Promise<void> {
        return this.selectButton.click();
    }
}
