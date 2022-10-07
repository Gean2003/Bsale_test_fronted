import {   getCatetoryId } from "./searchByCategory.js"

export const getCategory = (list) => {

    const url = 'https://bsaletestbackend-production.up.railway.app/api/products/category'
    axios.get(url)
         .then(res => printLists(res.data, list))
         .catch(err => console.log(err))

}

 const printLists = (data, list) => {

    for (let i = 0; i <data.length ; i++) {
        let category = `<option  class = "info cursor-pointer" id = ${i+1} value=${data[i].id} >${data[i].name}</option>`
        list.innerHTML += category
    }

}

getCatetoryId()



