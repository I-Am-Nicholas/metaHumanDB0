describe('MetaHumanDB App', () => {

  beforeEach( () => {
    browser.get('http://localhost:4200/');
  });

  var body = $('body')

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('MetaHumanDB');
  });

  it('clicking Dashboard shows a portion of the meta-humans list', () => {
    browser.findElement(by.id('dash')).click();
    expect(body.getText()).toContain('IRON MAN');
  });

});
