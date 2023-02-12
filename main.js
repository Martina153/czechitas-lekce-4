// tady je místo pro náš program
//const address = 'Pod Kaštany 31, 123 11 Horní Dlouhonosy'

//objects, const cause we are not 

/*const address = {
    streetName:'Pod Kaštany',
    number: 31,
    city: 'Horní Dlouhonosy',
    postalCode: '123 11'
} */

//let vstupUzivatele=prompt('Zadej cislo domu')
//address.number=Number(vstupUzivatele)

/*const user1 = {
    fullName:'Lubomir Vetvicka',
    login:'Lubos',
    address: {
        streetName:'Pod Kaštany',
        number: 31,
        city: 'Horní Dlouhonosy',
        postalCode: '123 11',
    },
    cartItems: 1
}*/

//destrukturovani

/*const product = {
    name: 'Mlynek na kavu',
    price: 520,
    currency: 'CZK',
}*/

//vyvorime nove premenne 
// const name = product.name shorter below

/*const {name,price,currency} = product*/

//REALITKA

const apartment = {
	type: 'rent',
	disposition: '3+1',
	area: {
		floorage: 100,
		balcony: 2,
		units: 'sqm',
	},
	city: 'Prague',
	district: 'Old Town',
	price: {
		rent: 28000,
		fees: {
			water: 1000,
			energy: 2500,
			services: 560,
		},
		currency: 'czk',
	},
	ownership: 'personal',
	condition: 'renovated',
	status: 'free',
	floor: 3,
}

const {city, district} = apartment

let dispozice = document.querySelector('.realitkaDispozice')
dispozice.textContent = apartment.disposition
dispozice.textContent = apartment.price.rent
dispozice.textContent = apartment.area
dispozice.textContent = city
dispozice.textContent = district





//KNIHOVNA

const kniha1 = {
    bookName:'Brief history of time',
    authorName: 'Stephen Hawking',
    year: 2016,
    bookID: '9780857501004',
    isbn: '0857501003',
    numebrOfPages: 265,
    price: {
        rent: 'free',
        buy: '250'
    }
}

const kniha2 = {
    bookName:'The Laws of Human Nature',
    authorName: 'Robert Greene',
    year: 2018,
    bookID: '99781781259191',
    isbn: '9781781259191',
    numebrOfPages: 300,
    price: {
        rent: 'free',
        buy: '319'
    }
}

//OCKOVANI-objekty

const person = {
    name: prompt('Zadej svoje meno. '),
    age: Number(prompt('Zadej svoj vek. ')),
}
document.body.innerHTML += "<p>Tvoje meno je: " + person.name + " tvoj vek je: " + person.age + " boli ste zaregistrovani na ockovanie.</p>";

