const $header = document.querySelector('header');
const $header_content = document.querySelector('.header-content');
const $main = document.querySelector('main');
const $footer = document.querySelector('footer');
const $cart = document.querySelector('.cart');

$cart.style.display = 'none';

function linkToCart() {
  Object.assign($header.style, {
    padding: '60px',
    borderBottom: '1px solid #ccc'
  });
  Object.assign($header_content.style, {
    display: 'flex',
    filter: 'brightness(0) saturate(100%)'
  });
  $main.style.display = 'none';
  $footer.style.display = 'none';
  $cart.style.display = 'block';
  renderProductsList();
}
function linkHome() {
  $cart.style.display = 'none';
  $main.style.display = 'block';
  $footer.style.display = 'block';
  Object.assign($header.style, {
    padding: '0',
    borderBottom: 'none'
  });
  Object.assign($header_content.style, {
    display: 'flex',
    filter: 'none'
  });
}
