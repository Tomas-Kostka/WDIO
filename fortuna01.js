// describe popisuje kontext, muze byt vice urovnovy
describe('ifortuna.cz test suite', () => { 
    describe('HomePage', () => {
      it('open HomePage, i.e. Prematch', () => {
        browser.url('https://www.ifortuna.cz')
        const homeTitle = 'Ifortuna.cz | Fortuna Game'
        //obsahem promenne nize je XPath 
        const titleElm = $(`//title[contains(text(),"${homeTitle}")]`)
        //waitForloadEventEnd() metoda je custom doplnek od Dana do WDIO
        browser.waitForloadEventEnd()
        //az po LoadEventEnd udalosti se vyhodnocuje (viz nasledujici krok)
        expect(titleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
      });
    }); 
    describe('Live', () => {
      it('open Live',()=>{
        //SELECTORS  - $(selector)
        // here I can use "id" so I use "#"" in front of the value
        //1st wrap it as a string - '#main-menu > li:nth-child(2) > a'
        //2nd wrap it into a Selector call $('')
        // =The method runs element.querySelector within the page
        //save the selectors into variables
        //using "absolutni selector": #main-menu li:nth-child(2) a
        //copy selector vraci: #main-menu > li:nth-child(2) > a
        const liveMenuItem = $('#main-menu li:nth-child(2) a')
        // or using XPath as a selector
        //const liveMenuItem = $('//*[@id="main-menu"]/li[2]/a')
        const liveTitle = 'Fortuna LIVE sázky - vsaďte si na probíhající zápasy'
        const liveTitleXPath = $(`//title[contains(text(),"${liveTitle}")]`)
                        
        //ACTIONS USING SELECTORS          
        //call the click() on the menu item btn
        liveMenuItem.click()
        //wait until the loadEventEnd
        browser.waitForloadEventEnd()
    
        //ASSERTIONS
        //pokud v assertion nize pouziji metodu toHaveValue() tak to NEFUNGUJE
        //matcher toHaveText() Checks if ELEMENT has a specific text
        expect(liveTitleXPath.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
    
      });
    })   
  })
