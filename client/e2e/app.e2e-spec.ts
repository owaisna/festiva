import { FivePage } from './app.po';

describe('five App', () => {
  let page: FivePage;

  beforeEach(() => {
    page = new FivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
