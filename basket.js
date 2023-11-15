class Product {
  #id;
  constructor(id, name, price) {
    this.#id = id;
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `\nInfo about product:\n${this.#id}\nName- ${this.name}\nPrice- ${
      this.price
    }`;
  }
}
const product = new Product(13542, "Sweet", 200);
const product2 = new Product(54312, "Sugar", 90);

class ShoppingCart {
  #products;
  constructor(...product) {
    this.#products = product;
  }
  getProd() {
    return this.#products;
  }

  addProduct(newProduct) {
    this.#products.push(newProduct);
  }

  removeProduct(removeProductId) {
    this.#products = this.#products.filter((prod) => prod.id !== removeProductId);
  }

  getTotal() {
    return this.#products.reduce((acc, { price }) => (acc += price), 0);
  }
}
const shoppingcart = new ShoppingCart(product, product2);

console.log(product.getInfo());
console.log(product2.getInfo());

shoppingcart.removeProduct(13542);
console.log(shoppingcart.getProd());


const product3 = new Product(898, "Tomato", 120);
shoppingcart.addProduct(product3)
console.log(shoppingcart.getProd());


console.log(shoppingcart.getTotal())