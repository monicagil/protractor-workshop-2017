import { $, ElementFinder, browser, promise } from 'protractor';

export class IFramePage {
    private get frame(): ElementFinder {
        return $('#IF1');
    }

    private get titlePage(): ElementFinder {
        return $('#content h1');
    }

    public async getTitlePage(): Promise<string> {
        return await this.titlePage.getText();
    }

    public async getHeight(): Promise<number> {
        const height = await this.frame.getAttribute('height');
        return Number(height);
    }

    public setFrameHeight(height: number): promise.Promise<any> {
        return browser.executeScript(`document.querySelector("#IF1").setAttribute('height', ${height});`);
    }

    public switchToFrame(): promise.Promise<void> {
        return browser.switchTo().frame(this.frame.getWebElement());
    }

    public switchToMainPage(): promise.Promise<void> {
        return browser.switchTo().defaultContent();
    }
}
