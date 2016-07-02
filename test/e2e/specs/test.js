module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('#fakeLoader', 5000)
      .waitForElementVisible('#headerwrap', 2000)
      .assert.containsText('h3', 'My skills')
      .assert.elementPresent('.logo')
      .assert.elementCount('.gallery', 6)
      .end()
  }
}
