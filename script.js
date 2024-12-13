//part1 setting up classes
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    //method to get total value of product
    getTotalValue() {
        return (this.price * this.quantity);
    }

    //method to return data to string
    toString() {
        return (`The product is ${this.name}, costs $ ${this.price}, and there is a quantity of ${this.quantity}`); 
    }

    //part3 static method
    //static method 
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price = product.price - (product.price * discount);
        });
        
    }
}

//part 2 adding inheritance
//adding subclass to super class
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    //method to return data to string
    toString() {
        return (`The product is ${this.name}, it will expire on ${this.expirationDate}, costs $ ${this.price}, and there is a quantity of ${this.quantity}`); 
    }
}

//part 4 store management
//store class w/ constructor
class Store {
    constructor() {
        this.inventory = [];
    }

    //method to add product to store 
    addProduct(product) {
        this.inventory.push(product);
    }

    //method to get inventory value
    getInventoryValue() {
        //initializing inventory value as 0
        let inventoryValue = 0;

        for(let i=0; i< this.inventory.length; i++) {
            inventoryValue += this.inventory[i].getTotalValue();
        }

        return inventoryValue;
    }

    //method to find product by name
    findProductByName(name) {
        
        for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].name.toLowerCase() === name.toLowerCase()) {
                return this.inventory[i];
            }
        }
        return null;
    }
}


// part 5 testing the system
// creating product objects
let iceCream = new PerishableProductProperties('Ice Cream', 6.99, 15, "Jan 9 2025");
let ryeBread = new PerishableProductProperties('Rye Bread', 3.75, 28, "Dec 21 2024");
let potatoChips = new ProductProperties('Lays Chips', 5.99, 70);
let cookies = new ProductProperties('Cookies', 3.97, 50);
let rice = new ProductProperties('rice', 2.99, 52);

//creating grocery store object
let groceryStore = new Store();

//adding products to grocery store
groceryStore.addProduct(iceCream);
groceryStore.addProduct(ryeBread);
groceryStore.addProduct(potatoChips);
groceryStore.addProduct(cookies);
groceryStore.addProduct(rice);

//logging inventory value
console.log(`The total value of the inventory before discount is: ${groceryStore.getInventoryValue()}`);

//applying discount
ProductProperties.applyDiscount(groceryStore.inventory, 0.15);

//logging inventory value after discount
console.log(`The total value of the inventory after 15% discount is: ${groceryStore.getInventoryValue()}`);

//finding product by name
console.log(groceryStore.findProductByName('rice'));
