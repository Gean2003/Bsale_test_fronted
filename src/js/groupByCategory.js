import {   getCatetoryId } from "./searchByCategory.js"

//PERF: funcion para buscar por categoria
export const getCategory = (list) => {

    const url = 'https://bsale-backend-vyob.onrender.com/api/categories'
    axios.get(url)
         .then(res => printLists(res.data.result, list))
         .catch(err => console.log(err))

}

//PERF: pintar categorias en una lista
 const printLists = (data, list) => {

    for (let i = 0; i <data.length ; i++) {
        let category = `<option  class = "info cursor-pointer" id = ${i+1} value=${data[i].id} >${data[i].name}</option>`
        list.innerHTML += category
    }

}

getCatetoryId()



