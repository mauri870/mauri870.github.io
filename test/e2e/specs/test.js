module.exports = {
  'mauri870.github.io e2e test index': browser => {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('#headerwrap', 1000)
      .assert.title('Mauri de Souza Nunes - Website')
      .assert.containsText('h3', 'My skills')
      .assert.elementPresent('.logo')
      .assert.elementCount('.project', 8)
      .end()
  },
  'mauri870.github.io e2e test 404': browser => {
    browser
      .url('http://localhost:8080/#/whatever')
      .assert.containsText('h1', 'Sorry but the page you are looking for could not be found')
      .end()
  }
}
