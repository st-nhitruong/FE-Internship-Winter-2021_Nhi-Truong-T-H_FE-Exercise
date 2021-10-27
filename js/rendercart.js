class Product {
  constructor(id, name, img, price, discount, color, size) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.discount = discount;
    this.color = color;
    this.size = size;
  }
  calcDiscountPrice() {
    let discount_price = this.price - (this.discount/100*this.price);
    return discount_price.toFixed(2);
  }
}

