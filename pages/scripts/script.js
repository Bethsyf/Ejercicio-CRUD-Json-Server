import { showCards } from "./modules/showCards.js";


let contenedorPerros = document.getElementById('containerdog');

document.addEventListener('DOMContentLoaded', async () => {
    let res = await fetch('http://localhost:4000/products');
    let data = await res.json();

    let productosPerro = data.filter(item => item.category == 'dog');    

    showCards(productosPerro, contenedorPerros);    
})



