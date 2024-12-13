//part1 setting up classes
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return (this.price * this.quantity);
    }

    toString() {
        return (`The product is ${this.name}, costs $ ${this.price}, and there is a quantity of ${this.quantity}`); 
    }

    //part3 static method
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
        
    }
}

//part 2 adding inheritance
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return (`The product is ${this.name}, it will expire on ${this.expirationDate}, costs $ ${this.price}, and there is a quantity of ${this.quantity}`); 
    }
}

//part 4 store management
class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        //initializing inventory value as 0
        let inventoryValue = 0;

        for(let i=0; i< this.inventory.length; i++) {
            inventoryValue += this.inventory[i].getTotalValue();
        }

        return inventoryValue;
    }

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
let iceCream = new PerishableProductProperties('Ice Cream', 6.99, 15, "Jan 9 2025");
let ryeBread = new PerishableProductProperties('Rye Bread', 3.75, 28, "Dec 21 2024");
let potatoChips = new ProductProperties('Lays Chips', 5.99, 70);
let cookies = new ProductProperties('Cookies', 3.97, 50);
let rice = new ProductProperties('rice', 2.99, 52);

let groceryStore = new Store();

groceryStore.addProduct(iceCream);
groceryStore.addProduct(ryeBread);
groceryStore.addProduct(potatoChips);
groceryStore.addProduct(cookies);
groceryStore.addProduct(rice);


console.log(`The total value of the inventory before discount is: ${groceryStore.getInventoryValue()}`);

ProductProperties.applyDiscount(groceryStore.inventory, 0.15);
console.log(`The total value of the inventory after 15% discount is: ${groceryStore.getInventoryValue()}`);



console.log(groceryStore.findProductByName('rice'));
