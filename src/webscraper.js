const puppeteer=require('puppeteer')

async function webscrap(url,searchtext){
      const browser=await puppeteer.launch();
      const page=await browser.newPage();
      await page.goto(url);

      /* let email = await newPage.evaluate((sel) => {

        let element = document.querySelector(sel);
        console.log(element);

        return element? element.innerHTML: null;

    }, '#subscriber-count'); */
    
     //const[el]= await newPage.$x('//*[@id="text"]');
    
    /*  const text= await el.getProperty('textContent');
     const title=await text.jsonValue(); */
    
    /*  const name = await newPage.$eval('#subtitle', el => el.innerText);

     console.log(name);

     await browser.close(); */
//*[@id="subtitle"]


 //const name = await newPage.$eval('div.s-result-item:nth-child(1) > div:nth-child(1) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > h2:nth-child(1) > a:nth-child(1) > span:nth-child(1)', el => el.innerText)
 /*  const[el]= await newPage.$x('/html/body/div[1]/div[1]/div[1]/div[2]/div/span[4]/div[1]/div[1]/div/span/div/div/div[3]/h2/a/span');
  const text= await el.getProperty('text');
  const name=await text.jsonValue(); */
 
  await page.type('#twotabsearchtextbox',searchtext)
  await page.click('input.nav-input')
  await page.waitForSelector('span.a-color-base.a-text-normal')
  //const titles=await page.evaluate(()=>Array.from(document.querySelectorAll('span.a-color-base.a-text-normal')).map((element)=>element.innerText))
  const titles=await page.evaluate(()=>[...document.querySelectorAll('span.a-color-base.a-text-normal')].map((element)=>element.innerText))
  console.log(titles)
 /*  await page.click('#pagnNextString')
  await page.waitForSelector('#resultsCol') */
  /* const pullovers = await page.$$('a.a-link-normal.a-text-normal')h & m mens
  await pullovers[2].click()
  await page.waitForSelector('#ppd')
  await page.screenshot({path: screenshot}) */
  await browser.close()
//   console.log('See screenshot: ' + screenshot)
  //console.log(name)

 //await browser.close()
    
    
}
webscrap('https://www.amazon.com','Java');
