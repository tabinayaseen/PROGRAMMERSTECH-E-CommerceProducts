const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const products = {
  1: {
    name: 'Product 1',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$19.99',
    image: 'pd1.jpg',
    rating: 4.2,
  },
  2: {
    name: 'Product 2',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$20.99',
    image: 'pd2.jpg',
    rating: 5,
  },
  3: {
    name: 'Product 3',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$14',
    image: 'pd3.jpg',
    rating: 3.9,
  },
  4: {
    name: 'Product 4',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$19',
    image: 'pd4.jpg',
    rating: 4.5,
  },
  5: {
    name: 'Product 5',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$14.9',
    image: 'pd5.jpg',
    rating: 3.2,
  },
  6: {
    name: 'Product 6',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$19.9',
    image: 'pd6.jpg',
    rating: 4.2,
  },
  7: {
    name: 'Product 7',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$13.9',
    image: 'pd7.jpg',
    rating: 2,
  },
  8: {
    name: 'Product 8',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$17',
    image: 'pd1.jpg',
    rating: 5,
  },
  9: {
    name: 'Product 9',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$18',
    image: 'pd2.jpg',
    rating: 4,
  },
  10: {
    name: 'Product 10',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$14.4',
    image: 'pd3.jpg',
    rating: 2.2,
  },
  11: {
    name: 'Product 11',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$21.6',
    image: 'pd4.jpg',
    rating: 3.2,
  },
  12: {
    name: 'Product 12',
    description: "Shoesc@pe is more than just a shoe brand it's a community of like-minded individuals who share a passion for great footwear. We're a group of creatives thinkers and shoe lovers who believe that the right shoes can elevate your mood, boost your confidence, and take you places. Our shoes are designed to be worn, loved and lived in. We're committed to sustainability quality and customer satisfaction and we strive to make a positive impact on the world one step at a time.",
    price: '$19',
    image: 'pd5.jpg',
    rating: 4.2,
  },
};

let cart = [];

function displayProductDetails(productId) {
  const product = products[productId];
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-price').textContent = product.price;
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-rating').textContent = `Rating: ${product.rating}/5`;
}


const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
displayProductDetails(productId);