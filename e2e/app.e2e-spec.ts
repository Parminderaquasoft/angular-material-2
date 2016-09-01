import { AquasoftPage } from './app.po';

describe('aquasoft App', function() {
  let page: AquasoftPage;

  beforeEach(() => {
    page = new AquasoftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
