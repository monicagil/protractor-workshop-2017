import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
    private get selectbutton(): ElementFinder {
        return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
    }

    public goToSelect(): promise.Promise<void> {
        return this.selectbutton.click();
    }
}
