import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';


describe('Open page', () => {
    beforeAll(async () => {
        await browser.get('http://toolsqa.com/automation-practice-form/');
    });
    beforeAll(async () => {
        const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

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
                'WebElement Commands']
        });
        await (browser.sleep(5000));
        it('algo hizo', async () => {
            expect('Practice Automation Form').toBe('Practice Automation Form');
        });
    });
});
