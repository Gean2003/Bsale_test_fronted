import { getCategory } from './groupByCategory.js'
import {nextPage, previousPage} from './paginateProducts.js'
import inputSearch from './searchProducts.js'

const button = document.getElementById('button')
const next = document.getElementById('btn_next')
const previous = document.getElementById('btn_previous')
const main = document.getElementById('main')
const filterCategory = document.getElementById('filter')

addEventListener('load', () => {
    getProducts()
     getCategory(filterCategory)

})

//TODO: obtener todos los productos
export const getProducts = () => {
  const input = document.getElementById('input')
    if (input.value !="") {
    	inputSearch()
    }else{
	 const url = 'https://bsale-backend-vyob.onrender.com/api/products'
	    axios.get(url)
	    .then(res =>  {
	            printProducts(res.data)
                next.classList.remove("hidden")
                previous.classList.remove("hidden")
	            } )
		.catch(err => console.log(err))
    }
    
}

//TODO: pintar productos
export const printProducts = products =>{

    const {result} = products
    // console.log(result);

    main.innerHTML= ""
    for (let i = 0; i < result.length; i++) {
	    const product = `<article class="  hover:scale-105 border flex  flex-col   w-[300px] h-[400px] rounded-lg cursor-pointer overflow-hidden transition-all " > 
			    <div class="flex w-full h-[300px] border-b ">
				<img  class=" object-contain w-full" src=${result[i].url_image? result[i].url_image : "https://cdn-icons-png.flaticon.com/512/1237/1237934.png?w=826&t=st=1668097726~exp=1668098326~hmac=b12d8d300a1deaf2cb5cfff02b751e9f5237dc188fc63c98bc9076bd3cfd53a7"} alt=${result[i].name} /> 
			    </div>
				<section class=" py-3 px-2"> <h2 class="text-center my-2">${result[i].name}</h2>
				    <div class="flex gap-5 justify-between px-5"> 
					<p>$ ${result[i].price}</p>
					<button id="button" >  <i class='bx bx-cart-add hover:scale-105 transition-all text-2xl text-white py-1 px-1 w-[40px] rounded-full bg-red-500' ></i> </button>
				    </div> </section>
			</article>`
	main.innerHTML += product
    	
    }
}


//PERF: funcion para buscar productos
inputSearch(input, button, printProducts)

//PERF: funciones para el paginado
nextPage(next, printProducts)

previousPage(previous, printProducts)

    

