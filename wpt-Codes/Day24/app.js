const { Builder, By, Key, until } = require('selenium-webdriver')(
  // (async function example() {
  //   let driver = await new Builder().forBrowser('chrome').build()
  //   try {
  //     await driver.get('https://www.google.com')
  //     await driver.findElement(By.name('q')).sendKeys('iphone', Key.RETURN)
  //     await driver.wait(until.titleIs('iphone - Google Search'), 5000)
  //   } finally {
  //     await driver.quit()
  //   }
  // })()

  async function example() {
    let driver = await new Builder().forBrowser('chrome').build()
    try {
      await driver.get('file:///Volumes/Data/today/js/calc.html')
      const elementNo1 = await driver.findElement(By.id('no1'))
      console.log(e, elementNo1)
    } finally {
      await driver.quit()
    }
  }
)()
