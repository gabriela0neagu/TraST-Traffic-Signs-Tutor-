it('should let you log in', function () {
  browser.url('http://localhost/test/html/LogIn.html');
  browser.setValue('input[name="username"]', 'Gabi');
  browser.setValue('input[name="password"]', '0000');
  browser.click('.button=login-btn');

  const pageUrl = browser.getUrl();
  assert.notEqual(pageUrl, 'http://localhost/test/html/LogIn.html');
  assert.equal(pageUrl, 'http://localhost/test/html/Profile.html');
})

