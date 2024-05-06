const puppeteer = require("puppeteer");

async function scrap() {

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    const url = "https://books.toscrape.com";
    
    await page.goto(url);

    await page.waitForNetworkIdle(); // comando para verificar se a pagina já parou de processar scripts


    const result = await page.evaluate( () => {
        
        const books = [];

        document.querySelectorAll("h3 > a").forEach(book => books.push(book.title));

        document.querySelectorAll(".price_color").forEach((book, i) => { 
            books[i].price = book.innerHTML;
        });

        //return document;
        return books;

    });

    
    const result1 = await page.evaluate( () => {
        
        const books2 = [];

        document.querySelectorAll("h3 > a").forEach(book => books2.push(book.title));


        //return document;
        return document;

    });

    console.log(result);
    console.log(result1);
    

    browser.close();

}

scrap();