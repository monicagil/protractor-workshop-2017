import { browser } from 'protractor';
import { element, by, ElementFinder } from 'protractor';
import * as remote from 'selenium-webdriver/remote';
import { resolve } from 'path';
import { existsSync } from 'fs';

interface PersonalInformation {
    firstName: string;
    lastName?: string;
    sex?: string;
    experience?: number;
    profession?: string[];
    tools?: string[];
    continent?: string;
    commands?: string[];
    file?: string;
}

export class PersonalInformationPage {
    private get firstNameField(): ElementFinder {
        return element(by.name('firstname'));
    }

    private get lastNameField(): ElementFinder {
        return element(by.name('lastname'));
    }

    private get fileInput(): ElementFinder {
        return element(by.id("photo"));
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

    private async uploadFile(filePath: string): Promise<void> {
        const fullPath = resolve(process.cwd(), filePath);
        if (existsSync(fullPath)) {
            await browser.setFileDetector(new remote.FileDetector());
            await this.fileInput.sendKeys(fullPath);
            await browser.setFileDetector(undefined);
        }
    }

    public async getFileName(): Promise<string> {
        const filePath = await this.fileInput.getAttribute('value');
        return filePath.match(/[^\\]*$/)[0];
    }

    public async getPageTitle(): Promise<string> {
        return element(by.id('content')).element(by.tagName('h1')).getText();
    }

    public async fillForm(form: PersonalInformation): Promise<void> {
        await this.firstNameField.sendKeys(form.firstName);
        await this.lastNameField.sendKeys(form.lastName);
        await this.sexOption(form.sex).click();
        await this.experienceOption(form.experience).click();
        for (const profession of form.profession) {
            await this.professionCheck(profession).click();
        }
        for (const tool of form.tools) {
            await this.toolsCheck(tool).click();
        }
        await this.continentOption(form.continent).click();
        for (const command of form.commands) {
            await this.commandsOption(command).click();
        }
        await this.uploadFile(form.file);
    }

    public async submit(form: PersonalInformation): Promise<void> {
        await this.fillForm(form);
        await this.submitButton.click();
    }
}
