import { browser, element, by } from 'protractor';

export class HackernewsMaterialPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hn-root h1')).getText();
  }
}
