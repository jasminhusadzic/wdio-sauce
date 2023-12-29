import Page from "../page";

export class LoginPage extends Page {
    constructor() {
        super('/')
    }

    get usernameInput() {
        return $('[data-test="username"]');
    }

    get passwordInput() {
        return $('[data-test="password"]');
    }

    get loginButton() {
        return $('[data-test="login-button"]');
    }


    login = async (credentials: {username: string, password: string}) => {
        (await this.usernameInput).waitForDisplayed();
        (await this.usernameInput).clearValue();
        (await this.usernameInput).setValue(credentials.username);
        (await this.passwordInput).waitForDisplayed();
        (await this.passwordInput).clearValue();
        (await this.passwordInput).setValue(credentials.password);
        (await this.loginButton).waitForClickable();
        (await this.loginButton).click();
    }
}