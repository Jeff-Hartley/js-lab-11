//part1 setting up classes
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }


    getTotalValue() {
        return this.price * this.quanity;
    }

}
