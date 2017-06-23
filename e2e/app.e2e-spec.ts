describe('MetaHumanDB App', () => {


  beforeEach( () => {
    browser.get('http://localhost:4200/dashboard');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('MetaHumanDB');
  });

});
