const axios = require('axios');
const cheerio = require('cheerio');

const countries = [];

async function scrap(){
    const response = await axios.get("https://www.scrapethissite.com/pages/simple/");
    // console.log(response.data); versao test dados puros
    const $ = cheerio.load(response.data);
    
    $(".country-name").each((i, item)=>{

        countries.push({ name: $(item).text().trim() }); //pegando texto do item e retirar os espaços

    })

    $(".country-capital").each((i, item)=>{

        countries[i].capital =$(item).text().trim() ; //pegando texto do item e retirar os espaços

    })
    console.log(countries); // vai listar todos os paises do site

    //console.log($.html());

}

scrap();