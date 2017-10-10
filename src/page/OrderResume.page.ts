import { $$, ElementFinder, ElementArrayFinder, promise } from 'protractor';

export class OrderResumePage {
    private get productContainerList(): ElementArrayFinder {
        return $$('.product-container');
    }

    private findByProduct(itemName: string): ElementFinder {
        return this.productContainerList
            .filter((item: ElementFinder) =>
                item.$('.product-name')
                    .getText()
                    .then((text: string) => text.includes(itemName)))
            .first();
    }

    public selectProduct(productName: string): promise.Promise<void> {
        return this.findByProduct(productName).click();
    }
}
