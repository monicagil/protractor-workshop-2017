import { $, ElementFinder, browser, promise } from 'protractor';

export class IFramePage {
    private get frame(): ElementFinder {
        return $('#IF1');
    }

    public async getHeight(): Promise<number> {
        const height = await this.frame.getAttribute('height');
        return Number(height);
    }

    public setFrameHeight(height: number): promise.Promise<any> {
        return browser.executeScript(`document.querySelector("#IF1").setAttribute('height', ${height});`);
    }
}
