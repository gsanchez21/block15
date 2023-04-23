// const shoe = {
//     brand: 'Converse',
//     laces: 'White',
//     velcro: 'None',
//     color: 'Green',
//     price: 39.99,
//     activityType: 'basketball'
// } ;
// console.log(shoe.brand, shoe.price)

//adding object property 
// shoe.material = 'cotton';
// console.table(shoe);

//updating object property value
// shoe.color = 'Blue';
// console.table(shoe);

// delete shoe.velcro;
// console.table(shoe);

// For in loop to return properties in the object
// for ( const property in shoe){
//     console.log(property)
// }
//For in loop to return values in the objects
// for ( const property in shoe){
//     console.log(shoe[property])
//}

//methods to collect keys and values into an array
// console.log(Object.keys(shoe));

// console.log(Object.values(shoe));

//Guided Practice
const dinner = {
    cheeseburger: 12,
    steak: 20,
    soup: 8,
    macAndCheese: 14,
    soupAndsaladCombo: 16
};
//console.log(dinner)

//console.log(Object.keys(dinner));

//console.log(Object.values(dinner));
// let total = 0;
// for (const meals in dinner){
//      total += dinner[meals];
//     }    
//     console.log(total);

    const prices = Object.values(dinner);
    let totalCost = 0;
    
    for (let i = 0; i < prices.length; i++) {
        totalCost += prices[i];
    }
    
    console.log(totalCost);

