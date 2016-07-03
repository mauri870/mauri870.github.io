module.exports = {
  'mauri870.github.io e2e tests': function (browser) {
    browser
    .url('http://localhost:8080')
      .pause(1000)
      .waitForElementVisible('#fakeLoader', 5000)
      .waitForElementVisible('#headerwrap', 5000)
      .assert.title('Mauri de Souza Nunes - Website')
      .assert.containsText('h3', 'My skills')
      .assert.elementPresent('.logo')
      .assert.elementCount('.gallery', 6)
      .end()
  },
  'mauri870.github.io e2e test 404': function (browser) {
    browser
    .url('http://localhost:8080/!#/whatever')
      .assert.containsText('h1', 'Sorry but the page you are looking for could not be found')
      .end()
  }
}
