import { YanservicePage } from './app.po';

describe('yanservice App', () => {
  let page: YanservicePage;

  beforeEach(() => {
    page = new YanservicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
