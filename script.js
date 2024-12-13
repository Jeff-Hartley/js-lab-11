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

    getInventoryVale() {
        //initializing inventory value as 0
        let inventoryValue = 0;

        for(let i=0; i< this.inventory.length; i++) {
            inventoryValue += this.inventory[i].getTotalValue();
        }

        return inventoryValue;
    }

    findProductByName(name) {
        for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].name === name) {
                return this.inventory[i];
            }
            else {
                return null;
            }
        }
    }
}

let iceCream = new PerishableProductProperties('Ice Cream', 6.99, 15, "Jan 9 2025");
let ryeBread = new PerishableProductProperties('Rye Bread', 3.75, 28, "Dec 21 2024");

console.log(iceCream.toString());
console.log(ryeBread.toString());