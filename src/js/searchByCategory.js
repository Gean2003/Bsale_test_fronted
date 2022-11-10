const next = document.getElementById('btn_next');
const previous = document.getElementById('btn_previous');

import { getProducts, printProducts } from "./main.js";

const filter = document.querySelector('#filter')

export const getCatetoryId = () => {

    filter.addEventListener('change' , (evt) => {
        const id = Number(evt.target.value)
        filterCategory(id)

        if (id === 0) getProducts()
    })

}

const filterCategory = (id) => {
    const url = 'https://bsale-backend-vyob.onrender.com/api/products?limit=999'
    axios.get(url)
        .then(res => {
            let data = res.data.result
            let obj = {
                result: data.filter( p => p.category == id )
            } 
            printProducts(obj)
            next.classList.add("hidden")
            previous.classList.add("hidden")
             // console.log(obj);
        })
            .catch(err => console.log(err))
}



