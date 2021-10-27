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

const product_list = [];
product1 = new Product("1", 'T-Shirt Summer Vibes', './images/image.png', 119.99, 30, 'white', 'XL');
product2 = new Product("2", 'Loose Knit 3/4 Sleeve', './images/image-2.png', 199.99, 0, 'white', 'XL');
product3 = new Product("3", 'Basic Slim Fit T-Shirt', './images/image-3.png', 79.99, 0, 'black', 'XL');
product4 = new Product("4", 'Loose Textured T-Shirt', './images/image-4.png', 199.99, 0, 'black', 'L');
product_list.push(product1);
product_list.push(product2);
product_list.push(product3);
product_list.push(product4);


// Render list of products on homepage
const renderListProductsSelected = () => {
  const $productsList = document.querySelector(".products-list");
  product_list.forEach((product) => {
    const $li = document.createElement("li");
    $li.classList.add("col");
    $li.classList.add("col-3");
    $productsList.appendChild($li);

    const $div = document.createElement("div");
    $div.classList.add("product");
    if(product.discount >0) {
      $div.classList.add("onsale");
    }
    $div.setAttribute("data-id", product.id);
    $li.appendChild($div);

    const $a = document.createElement("a");
    $div.appendChild($a);

    const $img = document.createElement("img");
    $img.classList.add("product-img");
    $img.setAttribute("alt", "image-product");
    $img.setAttribute("src", product.img);
    $a.appendChild($img);

    const $div1 = document.createElement("div");
    $div1.classList.add("product-content");
    $div.appendChild($div1);

    const $h4 = document.createElement("h4");
    $h4.classList.add("product-title");
    $div1.appendChild($h4);

    const $a1 = document.createElement("a");
    $a1.innerHTML = product.name;
    $h4.appendChild($a1);

    if(product.discount >0) {
      const $span = document.createElement("span");
      $span.classList.add("product-price-sale");
      $span.innerHTML = product.price;
      $div1.appendChild($span);

      const discount_price = product.price - (product.discount/100*product.price)
      const $span1 = document.createElement("span");
      $span1.classList.add("product-price");
      $span1.classList.add("original");
      $span1.innerHTML = discount_price;
      $div1.appendChild($span1);

      const $span2 = document.createElement("span");
      $span2.classList.add("badge");
      $span2.classList.add("badge-danger");
      $span2.innerHTML = `-${product.discount}%`;
      $div.appendChild($span2);
    }else {
      const $span = document.createElement("span");
      $span.classList.add("product-price");
      $span.innerHTML = product.price;
      $div1.appendChild($span);
    }

    const $button = document.createElement("div");
    $button.classList.add("button-add-cart");
    $button.classList.add("text-uppercase");
    $button.innerHTML = "add to cart";
    $div.appendChild($button);

    const $a2 = document.createElement("a");
    $button.appendChild($a2);


    $button.addEventListener("click", () => {
      addProductToCart(product);
    });
  });
};

const addProductToCart = (productData) => {
  const rawProducts = localStorage.getItem("bonhotam");
  const productsList = rawProducts ? JSON.parse(rawProducts) : [];
  const existingProduct = productsList.find(
    (product) => product.id === productData.id
  );
  if (existingProduct) {
    existingProduct.quantity = existingProduct.quantity + 1;
  } else {
    productData.quantity = 1;
    productsList.push(productData);
  }
  localStorage.setItem("bonhotam", JSON.stringify(productsList));
};

renderListProductsSelected();
