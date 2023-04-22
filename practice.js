const shoe = {
    brand: 'Converse',
    laces: 'White',
    velcro: 'None',
    color: 'Green',
    price: 39.99,
    activityType: 'basketball'
} ;
console.log(shoe.brand, shoe.price)

shoe.material = 'cotton';
console.table(shoe);

shoe.color = 'Blue';
console.table(shoe);

delete shoe.velcro;
console.table(shoe);
