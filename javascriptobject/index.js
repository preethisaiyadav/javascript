let product = {
    p_Id: 'P101',
    p_Name: "Iphone 5ss",
    price: 25000,
    discout: true,
    stock: 'Available',
    loc: ['BNG', 'Hoskete', 'Kalyan Nagar']
}
console.table(product.price)
for (prop in product) {
    console.table(product[prop])
}
