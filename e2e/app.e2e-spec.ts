import { MetaHumanDBPage } from './app.po';

describe('meta-human-db App', () => {
  let page: MetaHumanDBPage;

  beforeEach(() => {
    page = new MetaHumanDBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
