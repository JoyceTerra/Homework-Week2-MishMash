class ShoppingCart{
    constructor(name, quantity, price){
        this.name = name,
        this.quantity = quantity,
        this.price = price
    }
    getItems(){
       let cartStorage = [];
       return cartStorage
        //return []
    }
    
    addItem(newName, newQuantity, newPrice){
        cartStorage.push(newName, newQuantity, newPrice)
        console.log(this.newName + ' is now added to the cart')
    }
    
    clear(){

    }
    // clone(){

    // }
}

let cart = new ShoppingCart('iPhone', 3, 12)
//console.log(cart)
cart.getItems(); //empty array ----- After adding items, a call to `cart.getItems()` should return the added items in object form
cart.addItem('nominho', 4, 55);
console.log(cart.addItem);
// cart.addItem(itemName, quantity, price)//which adds a new item to an internal array. 
cart.clear();
//should remove all items from the items array.
// cart.clone()//should return a _new_ `ShoppingCart` object that contains all the same items. 
// //However, the items array and all the items inside should be **copied** so that any changes to one of the carts does not affect the other.


module.exports = { ShoppingCart }