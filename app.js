const totalPrice = document.getElementById('total-price');
const products = document.getElementById('products');
const fragment = document.createDocumentFragment();
let searchInput = document.getElementById('search');
let sum = 0;
let productList = [];
let filteredProductList = [];

document.addEventListener("DOMContentLoaded", () => {
    getProducts(); 
})
   
   function getProducts(){
	fetch("https://fakestoreapi.com/products?limit=5")
	.then((res) => {
        return res.json();
	})
	.then((data) => {
	productList = data;
	products.innerHTML = getHTML(data);
    
	}) 

}

function getHTML(data){
    return data
    .map(({title, image, price}) => generateHTML(title, image, price))
    .join('');
}

function generateHTML(title, image, price){
    let productDetails = `<div class="product">
    <p class= "title"> ${title}</p>
    <img src= "${image}" class="img">
    <p class="price"> $${+price.toFixed(2)}</p>
    <button id="buy" onClick="calculateTotalPrice(${price})">Buy</button>
    </div>`; 

    return productDetails;  
     
}
const calculateTotalPrice = (price) => {
sum += price;
totalPrice.textContent = sum;
}
  
searchInput.addEventListener('keyup', function(e){
    const currentword = e.target.value.toLowerCase();
    const filteredData= productList.filter(prod => prod.title.toLowerCase().includes(currentword));
    products.innerHTML = filteredData.length ? getHTML(filteredData) : getHTML(productList);
});