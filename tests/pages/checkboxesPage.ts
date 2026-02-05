// checkboxesPage.ts
import { type Locator, type Page } from '@playwright/test';

export class checkboxPage{
    readonly page: Page;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;    

    constructor(page: Page) {
        this.page = page;
        this.checkbox1 = page.locator('//*[@id="checkboxes"]/input[1]');
        this.checkbox2 = page.locator('//*[@id="checkboxes"]/input[2]');
    }

    async clickFirstCheckbox(){
    await this.checkbox1.click();
    }

    async clickSecondCheckbox() {
    await this.checkbox2.click();
    }

    async validateCheckbox1IsChecked() {
    const isChecked = await this.checkbox1.isChecked();
    if (!isChecked) {
        return true
    }
    return false;
    }

    async validateCheckbox2IsChecked() {
    const isChecked = await this.checkbox2.isChecked();
    if (!isChecked) {
        return true
    }
    return false;
    }
}