const $cart_total = document.querySelector('.total-cost-price');
function total() {
  var total = 0;
  var convert = localStorage.getItem('bonhotam') ? JSON.parse(localStorage.getItem('bonhotam')) : [];
  if(convert.length === 0) {
    return total.toFixed(2);
  } 
  else {
    convert.map(element => {
      total = total + (element.price * element.quantity);
    })
    return total.toFixed(2);
  }
}

function renderProductsList() { 
  const $cart_product = document.querySelector('tbody');
  var convert = localStorage.getItem('bonhotam') ? JSON.parse(localStorage.getItem('bonhotam')) : [];
  if(convert.length === 0) { 
    var list = `<p class="text-conntent">Không có sản phẩm nào trong giỏ hàng!</p>`;
    $cart_product.innerHTML = list;
  }
  else {
    var html = convert.map(element => {
      return  `<tr>
                <td>
                  <img src="${element.img}" alt="" class="cart-img">
                </td>
                <td>
                  <div class="cart-product-info">
                    <h3 class="cart-product-name">${element.name}</h3>
                    <p class="cart-product-id">#${element.id}</p>
                  </div>
                </td>
                <td>${element.color}</td>
                <td>${element.size}</td>
                <td class="cart-product-amount">
                  <div class="amount">
                    <button class="btn-decrease" onclick="decrementQty(${element.id})">-</button>
                    <input type="text" class="input-amount text-qty" value="${element.quantity}">
                    <button class="btn-increase" onclick="incrementQty(${element.id})">+</button>
                  </div>
                </td>
                <td class="text-price">$${element.price}</td>
                <td><button class="btn-remove" onclick="removeCart(${element.id})">X</button></td>
              </tr>
              `    
    });
    $cart_product.innerHTML = html.join('');
  }
  // Object.keys(convert).map((key, index) =>{ 
  //   const $tr = document.createElement('tr');
  //   $cart_product.appendChild($tr);

  //   const $tdImg = document.createElement("td");
  //   $tr.appendChild($tdImg);

  //   const $img = document.createElement("img");
  //   $img.classList.add("cart-img");
  //   $img.setAttribute("alt", "image-product");
  //   $img.setAttribute("src", convert[key]['img']);
  //   $tdImg.appendChild($img);

  //   const $tdInfo = document.createElement("td");
  //   $tr.appendChild($tdInfo);

  //   const $div = document.createElement("div");
  //   $div.classList.add("cart-product-info");
  //   $tdInfo.appendChild($div);

  //   const $h3 = document.createElement("h3");
  //   $h3.classList.add("cart-product-name");
  //   $h3.innerHTML= convert[key]['name'];
  //   $div.appendChild($h3);

  //   const $p = document.createElement("p");
  //   $p.classList.add("cart-product-id");
  //   $p.innerHTML= convert[key]['id'];
  //   $div.appendChild($p);

  //   const $tdColor = document.createElement("td");
  //   $tdColor.innerHTML= convert[key]['color'];
  //   $tr.appendChild($tdColor);

  //   const $tdSize = document.createElement("td");
  //   $tdSize.innerHTML= convert[key]['size'];
  //   $tr.appendChild($tdSize);
    
  //   const $tdQty = document.createElement("td");
  //   $tdQty.classList.add("cart-product-amount");
  //   $tr.appendChild($tdQty);
  //   const $div2 = document.createElement("div");
  //   $div2.classList.add("amount");
  //   $tdQty.appendChild($div2);
  //   const $buttonIcre = document.createElement("button");
  //   $buttonIcre.innerHTML= "+";
  //   $buttonIcre.classList.add("btn-increase");
  //   $buttonIcre.setAttribute("onclick", "incrementQty("+convert[key]['id']+")");
  //   $div2.appendChild($buttonIcre);
  //   const $input = document.createElement("input");
  //   $input.classList.add("input-amount");
  //   $input.value = convert[key]['quantity'];
  //   $div2.appendChild($input);
  //   const $buttonDecre = document.createElement("button");
  //   $buttonDecre.innerHTML= "-";
  //   $buttonDecre.classList.add("btn-decrease");
  //   $buttonDecre.setAttribute("onclick", "decrementQty("+convert[key]['id']+")");
  //   $div2.appendChild($buttonDecre);
    

  //   const $tdPrice = document.createElement("td");
  //   $tdPrice.innerHTML= convert[key]['price'];
  //   $tr.appendChild($tdPrice);

  //   const $tdButton = document.createElement("td");
  //   $tr.appendChild($tdButton);

  //   const $button = document.createElement("button");
  //   $button.classList.add("btn-remove");
  //   $button.setAttribute("onclick", "removeCart("+convert[key]['id']+")")
  //   $button.innerHTML ="X"
  //   $tdButton.appendChild($button);
  // })
  $cart_total.innerHTML ='$' + total();
};

sumQty();

function incrementQty(id) {
  var convert = JSON.parse(localStorage.getItem('bonhotam'));
  convert.map(element => {
    if (element.id == id) {
      element.quantity = element.quantity + 1;
    }
  })
  localStorage.setItem('bonhotam', JSON.stringify(convert));
  renderProductsList();
  $cart_total.innerHTML ='$' + total();
  sumQty();
}

function decrementQty(id) {
  var convert = JSON.parse(localStorage.getItem('bonhotam'));
  convert.map(element => {
    if (element.id == id) {
      element.quantity = element.quantity - 1;
      localStorage.setItem('bonhotam', JSON.stringify(convert));    
      if(element.quantity == 0) {
        removeCart(element.id);
      }
      renderProductsList();
      $cart_total.innerHTML ='$' + total();
      sumQty();
    }
  })
}

function removeCart(id) {
  var convert = JSON.parse(localStorage.getItem('bonhotam'));
  convert = convert.filter(product => product.id != id);
  localStorage.setItem('bonhotam', JSON.stringify(convert));
  renderProductsList();
  $cart_total.innerHTML ='$' + total();
  sumQty();
}
