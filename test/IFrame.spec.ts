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

    describe('I switch to iframe', () => {
        beforeAll(async () => {
            await iFramePage.switchToFrame();
        });
        it('the title of iframe', async () => {
            expect(await iFramePage.getTitlePage()).toBe('Practice Automation Form');
        });
    });

    describe('I switch to main page', () => {
        beforeAll(async () => {
            await iFramePage.switchToMainPage();
        });
        it('the title of main page', async () => {
            expect(await iFramePage.getTitlePage()).toBe('Sample Iframe page');
        });
    });
});
