describe('MetaHumanDB App', () => {


  beforeEach( () => {
    browser.get('http://localhost:4200/dashboard');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('MetaHumanDB');
  });

  it('clicking metas shows list of meta-humans', () => {
    var body = $('body')
    var dash = browser.findElement(by.id('dash'));
    dash.click();
    expect(body.getText()).toContain('IRON MAN');
  });

});
