export default class Product {
  static totalProduct = 0;
  constructor(prodId, prodName, category, price = 0, totalBuy = 1) {
    this.prodId = prodId;
    this.prodName = prodName;
    this.category = category;
    this.price = price;
    this.total = totalBuy;
    this.subTotal = price * totalBuy;
    Product.totalProduct++;
  }

  setPrice(price) {
    this.price = price;
    this.subTotal = price * totalBuy;
  }

  setTotalBuy(total) {
    this.total = total;
  }

  toString() {
    return ` ${this.prodName} ${this.category}`;
  }
}
