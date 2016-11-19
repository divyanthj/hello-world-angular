describe('main page', function() {
  
  it('should say hello world', function() {
    // Load the AngularJS homepage.
    browser.get('http://localhost:8080');

    // Find the element with binding matching 'name' - this will
    // find the <h1>Hello {{name}}!</h1> element.
    var greeting = element(by.binding('name'));

    // Assert that the text element has the expected value.
    // Protractor patches 'expect' to understand promises.

    expect(greeting.getText()).toEqual('Hello World');

  });

});
