const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function first() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('localhost:8080');
    await driver.findElement(By.name('userInput')).sendKeys('abcdefghijklmnop', Key.RETURN);
    await driver.wait(until.titleIs('Gorbyoyo Translator'), 1000);
  } finally {
    await driver.quit();
  }
})();

(async function second() {
	let driver = await new Builder().forBrowser('firefox').build();
	try {
	  await driver.get('localhost:8080');
	  await driver.findElement(By.name('userInput')).sendKeys('abc', Key.RETURN);
	  await driver.wait(until.urlContains('translate'), 1000);
	} finally {
	  await driver.quit();
	}
  })();