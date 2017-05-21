import { HackernewsMaterialPage } from './app.po';

describe('hackernews-material App', () => {
  let page: HackernewsMaterialPage;

  beforeEach(() => {
    page = new HackernewsMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hn works!');
  });
});
