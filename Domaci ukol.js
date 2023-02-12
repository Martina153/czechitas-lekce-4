// tady je místo pro náš program
let text1 = 'Nejaky muj delsi text'.toUpperCase() //vse velkym
let text2 = 'Nejaky muj delsi text'.toLocaleLowerCase() //vse malym
let text3 = 'Nejaky muj delsi text'.length //pocet znaku v retezci
let text4= 'Nejaky muj delsi text'.trim() //odstrani na zacatku, konci prazdne znaky (medzera)
let text5 = 'Nejaky muj delsi text'.slice(0,6) //vypis prvnich 5 znaku, chcem zacinat od 0 znaku
let text6 = 'cz.Nejaky muj delsi text'.indexOf('cz') //vypise umistneni hledaneho slova/textu/znaku
let text7 = '20'.padStart(4,'0') //chceme posunout mista v ramci textu, chceme mit 2 mista na zacatku nulou
let text8 = '20'.padStart(4,'0') //chceme posunout mista v ramci textu, chceme mit 2 mista na konci nulou
//interpolace retazcov
const order = {
    id: 37214,
    product: 'pěnová matrace',
    delivery: '21.8.2023',
  };
  
  const { id, product, delivery } = order;
  //prvni moznost zapisu
  let text = 'id' + id + 'Product' +product + 'doruceni do' 
  document.body.innerHTML = (
    '<h2>Objednávka: ' + id + '</h2>' +
    '<p>Zboží ' + product + ' bude doručeno ' + delivery + '.</p>'
  );
  //druha moznost zapisu, pozor su tu jine uvodzovky 
  let text_2 = `<p>Zbozi ${product} bude doruceno ${delivery}. </p>`

  //viacriadkove retazce

  let dalsiHtml =  `
  <header>
    <h1>Název stránky</h1>
  </header>
  <main>Obsah stránky</main>
  <footer>Patička</footer>
`

//nebo mozeme staviat tabulku 

let dalsiHtml2 = 
`
<header>Nadpis</header>
    <p> ${product} </p>
    <p> ${id} </p>
    <p> ${delivery} </p>
`

let dalsiHtml3= 
`
<header>
    <h1>Objednávka: ${String(id).padStart(8, '0')}</h1>
  </header>
  <main>
    <p>Zboží ${product} bude doručeno ${delivery}.</p>
  </main>
  <footer>www.matrace-a-syn.cz</footer>
`

document.body.innerHTML = dalsiHtml3







