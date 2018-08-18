class ShoppingCart{
    constructor(){
        this.item = []
    }

    getItems(){
        return this.item
    }
    
    addItem(nameItem, quantityItem, priceItem){
       this.item.push({
           name: nameItem,
           quantity: quantityItem,
           pricePerUnit: priceItem
       })
    }
    
    clear(){
        this.item = []
    }
    clone(){

    }
}


let cart = new ShoppingCart("ahoahi", 32, 45)
cart.getItems();
cart.addItem("Trash can", 1, 15.5);
cart.clear();

console.log("AAAAAAAAAAAAAAA", cart)


module.exports =  ShoppingCart