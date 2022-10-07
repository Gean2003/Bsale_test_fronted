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

export const getProducts = () => {
  const input = document.getElementById('input')
    if (input.value !="") {
    	inputSearch()
    }else{
	 const url = 'https://bsaletestbackend-production.up.railway.app/api/products'
	    axios.get(url)
	    .then(res =>  {
	            printProducts(res.data)
	            } )
		.catch(err => console.log(err))
    }
    
}

export const printProducts = products =>{

    const {result} = products
    // console.log(result);

    main.innerHTML= ""
    for (let i = 0; i < result.length; i++) {
	    const product = `<article class="  hover:scale-105 border flex  flex-col   w-[300px] h-[400px] rounded-lg cursor-pointer overflow-hidden transition-all " > 
			    <div class="flex w-full h-[300px] border-b ">
				<img  class=" object-contain w-full" src=${result[i].url_image} alt=${result[i].name} /> 
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


inputSearch(input, button, printProducts)

nextPage(next, printProducts)

previousPage(previous, printProducts)

    

