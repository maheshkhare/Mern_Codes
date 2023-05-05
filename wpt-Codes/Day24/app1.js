const { Builder, By, Key, until } = require('selenium-webdriver')

;(async function example() {
  let driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get('file:///Volumes/Data/today/js/calc.html')
    await driver.findElement(By.id('no1')).sendKeys('10')
    await driver.findElement(By.id('no2')).sendKeys('20')
    await (await driver.findElement(By.id('add'))).click()

    const answer = await (await driver.findElement(By.id('result'))).getText()
    if (parseInt(answer) == 30) {
      console.log('test case passed')
    } else {
      console.log('test case not passed')
    }

    // setTimeout(async () => {
    //   await driver.quit()
    // }, 5000)
  } finally {
    await driver.quit()
  }
})()
