describe('MetaHumanDB App', () => {

  beforeEach( () => {
    browser.get('http://localhost:4200/');
  });

  var body = $('body')
  var dashWrapper = $('#grid-wrap');
  var metas = $('.metas')

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('MetaHumanDB');
  });

  it("should not show the dashboard elements before dashboard button is clicked", () => {
    expect(browser.isElementPresent(dashWrapper)).toBe(false);
  });

  it('clicking Dashboard shows Dashboard', () => {
    browser.findElement(by.id('dashboard')).click();
    expect(browser.isElementPresent(dashWrapper)).toBe(true);
  });

  it('clicking Meta-List shows a list of all meta-humans', () => {
    browser.findElement(by.id('metaList')).click();
    expect(browser.isElementPresent(metas)).toBe(true);
  });

});
