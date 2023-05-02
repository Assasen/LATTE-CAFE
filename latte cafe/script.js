let first_img = document.getElementById('img_1');
let second_img = document.getElementById('img_2');
let third_img = document.getElementById('img_3');

let first_button = document.getElementById('food_menu');
let second_button = document.getElementById('drinks_menu');
let third_button = document.getElementById('takeaway_menu');

const showFirstImage = () => {
  first_img.style.display = 'block';
  second_img.style.display = 'none';
  third_img.style.display = 'none';
  first_button.classList.add('menu-button-active');
  second_button.classList.remove('menu-button-active');
  third_button.classList.remove('menu-button-active');
};

const showSecondImage = () => {
  first_img.style.display = 'none';
  second_img.style.display = 'block';
  third_img.style.display = 'none';
  first_button.classList.remove('menu-button-active');
  second_button.classList.add('menu-button-active');
  third_button.classList.remove('menu-button-active');
};

const showThirdImage = () => {
  first_img.style.display = 'none';
  second_img.style.display = 'none';
  third_img.style.display = 'block';
  first_button.classList.remove('menu-button-active');
  second_button.classList.remove('menu-button-active');
  third_button.classList.add('menu-button-active');
};
