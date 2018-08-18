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
       // return new ShoppingCart(this.item)
       //console.log(item)
    }
}


let cart = new ShoppingCart();
cart.getItems();
cart.addItem("Trash can", 1, 15.5);
cart.clear();
cart.clone();



module.exports =  ShoppingCart