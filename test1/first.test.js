const {assert} = require('chai');
const webdriver = require('selenium-webdriver');
const { Builder, By } = require('selenium-webdriver');
const Capabilities = require('selenium-webdriver/lib/capabilities')
        .Capabilities;
const capabilities = Capabilities.chrome();
capabilities.set('marionette', true);
const logger = require('winston');
//let driver;
const nodeFetch = require("node-fetch");
const reqURL = 'https://jsonplaceholder.typicode.com/users';

describe("1.Portfolio test suite :)", () => {

    describe('Test #1', () => {

        it('Add and delete elements', async() => {

        

            try {

            logger.info('1. Open full screen mode');
        await driver.manage().window().maximize();

       logger.info('2.Check that we are on the required page Go to Forgot Add/Remove Elements');
       await driver.findElement(By.xpath("//a[@href='/add_remove_elements/']")).click();
      

       logger.info('3.Сheck that we are on the required page and click 5 times on "add element"');
       let checkPage = await driver.findElement(By.css('body h3')).getText();
       assert.equal(checkPage, 'Add/Remove Elements', 'Opened page');
       let addElement = await driver.findElement(By.xpath("//button[text()='Add Element']"))
       for (let i =0; i < 5; i++){
           await addElement.click();
       }
       


       logger.info('4. Make sure 5 items appear')
       let fiveElements = await driver.findElements(By.className('added-manually'));
       assert.equal(fiveElements.length, '5', 'Find five elements');
       await fiveElements[4].click();
       await fiveElements[3].click();


       logger.info('5. Сlick on two elements and make sure there are 3 left')
       fiveElements = await driver.findElements(By.className('added-manually'));
       assert.equal(fiveElements.length, 3, 'left 3 elements');
       } finally {
       }
        });

before(async() => {
            driver = await new webdriver.Builder()
                    .withCapabilities(capabilities).build();
            driver.get("http://the-internet.herokuapp.com/");
        });

after(async() => {
    
    await driver.quit();
});

});


describe('Test #2', () => {

    it('Natively GET request', async() => {
        

        try {
            logger.info("1. Open full screen mode");
            await driver.manage().window().maximize();
    
            logger.info("2. Перейти в Frames > iFrame");
            await (await driver.findElement(By.xpath("//a[@href='/frames']"))).click();
            await (await driver.findElement(By.xpath("//a[@href='/iframe']"))).click();
    
            logger.info("3. Run natively GET request https://jsonplaceholder.typicode.com/users and fill in all zip codes in addresses");
            let response = await (await nodeFetch(reqURL)).json();
    
            logger.info("4. Enter all titles in the text box after \ n")
            let contentBody = await driver.findElement(By.id('mce_0_ifr'));
            for (let i = 0; i < response.length; i++) {
                await contentBody.sendKeys(response[i].address.zipcode + '\n');
            }
        } finally {
   }
    });

before(async() => {
        driver = await new webdriver.Builder()
                .withCapabilities(capabilities).build();
        driver.get("http://the-internet.herokuapp.com/");
    });

after(async() => {

await driver.quit();
});

});

describe('Test #3', () => {

    it('Check checkboxes', async() => {

    

        try {
            logger.info('1. Open full screen mode');
            await driver.manage().window().maximize();
    
            logger.info('2. Go to Checkboxes');
            await driver.findElement(By.xpath("//a[@href='/checkboxes']")).click();
    
            
            logger.info('3. Remove Checkboxes 2 and check that Checkboxes 2 is removed');
            let boxOne = await driver.findElement(By.xpath("//*[@id='checkboxes']/input[2]")).click();
            let unChecked = await driver.findElement(By.xpath("//*[@id='checkboxes']/input[2]")).isSelected();
            assert.equal(unChecked, false, "checked");
    
          
             
           logger.info('4. Install Checkboxes 1 and check that Checkboxes 1 is installed');
           let boxTwo = await driver.findElement(By.xpath("//*[@id='checkboxes']/input[1]")).click();
           let checked = await driver.findElement(By.xpath("//*[@id='checkboxes']/input[1]")).isSelected();
           assert.equal(checked, true, 'Check2');
            
    
    
           } finally {
   }
    });

before(async() => {
        driver = await new webdriver.Builder()
                .withCapabilities(capabilities).build();
        driver.get("http://the-internet.herokuapp.com/");
    });

after(async() => {

await driver.quit();
});

});

});
