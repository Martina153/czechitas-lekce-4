// tady je místo pro náš program
const title = "Brief History of Time"
console.log(title)

//Vypište do konzole počet znaků názvu.
let pocetZnaku = title.length
console.log(pocetZnaku)
//Vypište název filmu převedený na velká písmena.
let upperCase = title.toUpperCase()
console.log(upperCase)
//Vyřízněte z názvu prvních pět písmen.
let extracted1 = title.slice(0,6)
console.log(extracted1)
//Vyřízněte z názvu posledních pět písmen.
let extracted2 = title.slice(title.length - 5, title.length)
console.log(extracted2)


//emaily 
//Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
let email = prompt("Zadej svoj email. ");
//Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
let atIndex = email.indexOf('@');
//Pomocí metody slice vyřízněte z e-mailu první část představující jméno a příjmení uživatele.
let userName = email.slice(0,atIndex);
let domain = email.slice(atIndex+ 1);


const parsedEmail = {
  userName: userName,
  domain: domain,
}

let dalsiHtml1= 
`
<header>
    <h1>Emaily</h1>
  </header>
  <main>
    <p>Uzivatelske jmeno: ${userName}</p>
    <p>Domena: ${domain}</p>
  </main>
`

document.body.innerHTML = dalsiHtml1

