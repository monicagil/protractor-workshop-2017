import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
    private get emailField(): ElementFinder {
        return $('#email');
    }

    private get passwordField(): ElementFinder {
        return $('#passwd');
    }

    private get submitButton(): ElementFinder {
        return $('#SubmitLogin > span');
    }

    public async login(email: string, password: string): Promise<void> {
        await this.emailField.sendKeys(email);
        await this.passwordField.sendKeys(password);
        await this.submitButton.click();
    }
}
