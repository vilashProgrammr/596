import { MarvelHeroPage } from './app.po';

describe('marvel-hero App', () => {
  let page: MarvelHeroPage;

  beforeEach(() => {
    page = new MarvelHeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
