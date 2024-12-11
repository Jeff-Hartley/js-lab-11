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
}