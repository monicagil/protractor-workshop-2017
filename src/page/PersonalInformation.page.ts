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
        return element(by.name('firstname'));;
    }

    private get lastNameField(): ElementFinder {
        return element(by.name('lastname'));;
    }

    private get sexField(): ElementFinder {
        return element(by.css("input[value='sex']"));
    }

    private get experienceField(): ElementFinder {
        return element(by.css("input[value='exp']"));
    }

    private get toolsField(): ElementFinder {
        return element(by.css("input[value='tool']"));
    }

    private get continentField(): ElementFinder {
        return element(by.id('continents'));
    }

    private get commandsField(): ElementFinder {
        return element(by.id('selenium_commands'));
    }

    private get submitButton(): ElementFinder {
        return element(by.id('submit'));
    }

    public async fillForm(datos: PersonalInformation): Promise<void> {
        await this.firstNameField.sendKeys(datos.firstName);
    // ////////
    // testForm.
    }
}