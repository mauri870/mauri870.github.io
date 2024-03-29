module.exports = {
  'mauri870.com e2e test index': (browser) => {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#headerwrap', 20000)
      .assert.title('Mauri870\'s website - Mauri de Souza Nunes')
      .assert.containsText('h3', 'My skills')
      .assert.elementPresent('.logo')
      .assert.elementCount('.project', 20)
      .assert.elementCount('#social .row .col-lg-3 a', 4)
      .end();
  },
  'mauri870.com e2e test 404': (browser) => {
    browser
      .url('http://localhost:8080/#/whatever')
      .assert.containsText('h1', 'Sorry but the page you are looking for could not be found')
      .end();
  },
};
