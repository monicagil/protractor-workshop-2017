import { element, by, ElementFinder } from 'protractor';

interface PersonalInformation {
    firstName: string;
    lastName?: string;
    sex?: string;
    experience?: number;
    profession?: string[];
    tools?: string[];
    continent?: string;
    commands?: string[];
}

export class PersonalInformationPage {
    private get firstNameField(): ElementFinder {
        return element(by.name('firstname'));
    }

    private get lastNameField(): ElementFinder {
        return element(by.name('lastname'));
    }

    private sexOption(name: string): ElementFinder {
        return element(by.css(`[name="sex"][value="${name}"]`));
    }

    private experienceOption(years: number): ElementFinder {
        return element(by.css(`[name="exp"][value="${years}"]`));
    }

    private professionCheck(profession: string): ElementFinder {
        return element(by.css(`[name="profession"][value="${profession}"]`));
    }

    private toolsCheck(tool: string): ElementFinder {
        return element(by.css(`[name="tool"][value="${tool}"]`));
    }

    private continentOption(name: string): ElementFinder {
        return element(by.id('continents')).element(by.cssContainingText('option', name));
    }

    private commandsOption(name: string): ElementFinder {
        return element(by.id('selenium_commands')).element(by.cssContainingText('option', name));
    }

    private get submitButton(): ElementFinder {
        return element(by.id('submit'));
    }

    public async getPageTitle(): Promise<string> {
        return element(by.id('content')).element(by.tagName('h1')).getText();
    }

    public async fillForm(datos: PersonalInformation): Promise<void> {
        await this.firstNameField.click();
        await this.firstNameField.sendKeys(datos.firstName);
        await this.lastNameField.click();
        await this.lastNameField.sendKeys(datos.lastName);
        await this.sexOption(datos.sex).click();
        await this.experienceOption(datos.experience).click();
        for (let profession of datos.profession) {
            await this.professionCheck(profession).click();
        }
        for (let tool of datos.tools) {
            await this.toolsCheck(tool).click();
        }
        await this.continentOption(datos.continent).click();
        for (let command of datos.commands) {
            await this.commandsOption(command).click();
        }
        await this.submitButton.click();
    }
}
