// Fetching elements from the DOM

const totalPrice = document.getElementById('total-price');
const products = document.getElementById('products');
const fragment = document.createDocumentFragment();
let sum = 0;
// fetch the products from the API
window.onload = function fetchProducts(){
    let url = "https://fakestoreapi.com/products?limit=5"
   
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let productList = data;
     productList.forEach((product) => {
        const title = document.createElement('p');
        const image = document.createElement('img');
        const price = document.createElement('p');
        const buy = document.createElement('button');
    
        title.textContent = product.title;
        image.src = product.image;
        image.classList.add('img');
        price.textContent = product.price;
        buy.textContent = 'Buy';
        
        buy.onclick = (e) => {
            e.preventDefault();
            sum += +price.textContent;
            totalPrice.textContent = sum.toFixed(2);
        }
        fragment.append(title,image, price, buy);
        
        
     })
     products.appendChild(fragment);

     
   
     
    });
    
}



    
     




