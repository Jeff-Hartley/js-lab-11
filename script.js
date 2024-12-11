//part1 setting up classes
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return console.log(this.price * this.quanity);
    }

    toString() {
        return console.log(`The product is ${this.name}, costs $ ${this.price}, and there is a quantity of ${this.quantity}`); 
    }
}

//part 2 adding inheritance
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return console.log(`The product is ${this.name}, it will expire on ${this.expirationDate}, costs $ ${this.price}, and there is a quantity of ${this.quantity}`); 
    }
}

let iceCream = new PerishableProductProperties('Ice Cream', 6.99, 15, "Jan 9 2025");
let ryeBread = new PerishableProductProperties('Rye Bread', 3.75, 28, "Dec 21 2024");

iceCream.toString();
ryeBread.toString();