import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('working with iframe', () => {
    const iFramePage = new IFramePage();

    beforeAll(async () => {
        await browser.get('http://toolsqa.com/iframe-practice-page/');
    });

    describe('When I change the height of the iframe', () => {
        beforeAll(async () => {
            await iFramePage.setFrameHeight(700);
        });

        it('then new height', async () => {
            expect(await iFramePage.getHeight()).toBe(700);
        });
    });
});
