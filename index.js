// After an initial meeting, the management team has decided they want to collect the following information. 
//As a test case, you have your friend Jake complete the survey.
// Using what we know about JavaScript objects, create an object labeled customer and add the following key:value pairs:
// keys	         values
// firstName	"jake"
// lastName	    "smith"
// email	    "jaekSmih!aol.com"
// phone	    undefined
// zipCode	    "631"
// favoriteFlavors	32
// cupSize	     "medium"
// favoriteStore  "Target"
// firstVisit	  false

const customer = {
    firstName: 'jake',
    lastName: 'smith',
    email: 'jaekSmith!aol.com',
    phone: undefined,
    zipCode: '631',
    favoriteFlavors: 32,
    cupSize: 'medium',
    favoriteStore: 'Target',
    firstVisit: false
}
console.table(customer);

//Modified the following properties to correct the previous errors.
customer['email'] = 'Jak3Smith1992@email.com';
customer['phone'] = 3193331234;
customer[ 'zipCode'] = '63132',
customer['favoriteFlavors'] = 'coffee, '+'strawberry, '+'matcha';

console.table(customer);

//Remove the following properties per management.
delete customer.zipCode ; 
delete customer.favoriteStore;

console.table(customer);

// Management team wants to add more keys.
customer.toppings = 'chocolate sprinkles, '+ 'wafer straws, '+'gummy bears';
customer.futureFlavors = 'mango';
customer.todaysPurchaseCost = 5.32;

console.table(customer);

//Return keys of the survey as an array.
console.log(Object.keys(customer));
