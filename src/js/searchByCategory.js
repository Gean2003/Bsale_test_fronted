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
    const url = 'https://bsaletestbackend-production.up.railway.app/api/products?perpage=9999'
    axios.get(url)
        .then(res => {
            let data = res.data.result
            let obj = {
                result: data.filter( p => p.category == id )
            } 
            printProducts(obj)
             // console.log(obj);
        })
            .catch(err => console.log(err))
}



