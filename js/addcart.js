class Product {
    constructor(id, name, img, price, discount) {
      this.id = id;
      this.name = name;
      this.img = img;
      this.price = price;
      this.discount = discount;
    }
    calcDiscountPrice() {
      let discount_price = this.price - (this.discount/100*this.price);
      return discount_price;
    }
  }

function creatProduct(product) {
  let fullProduct = new Product(product.id, product.name, product.img, product.price, product.discount);
  return fullProduct;
}