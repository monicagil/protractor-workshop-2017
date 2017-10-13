import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Open page', () => {
    beforeAll(async () => {
        await browser.get('http://toolsqa.com/automation-practice-form/');
    });
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    beforeAll(async () => {
        await personalInformationPage.fillForm({
            firstName: 'Alejandro',
            lastName: 'Perdomo',
            sex: 'Male',
            experience: 7,
            profession: ['Automation Tester'],
            tools: ['Selenium Webdriver'],
            continent: 'South America',
            commands: [
                'Browser Commands',
                'Navigation Commands',
                'Switch Commands',
                'Wait Commands',
                'WebElement Commands'],
            file: './resources/reporte.png'
        });
    });

    it('the form is ready....', async () => {
        expect(await personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });

    it('then filename is loaded', async () => {
        expect(await personalInformationPage.getFileName()).toBe('reporte.png');
    });
});
