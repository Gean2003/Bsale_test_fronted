const next = document.getElementById('btn_next')
const previous = document.getElementById('btn_previous')

 let page = 1
export const nextPage = (printProducts) => {
    next.addEventListener('click', ()=> {
	page += 1
	const url = `https://bsale-backend-vyob.onrender.com/api/products?offset=${page}`
	axios.get(url)
            .then(res => {
                if (res.data.nextPage != null) {
                    printProducts(res.data)
                }else{
                    printProducts(res.data)
                    next.classList.add("hidden")
                }
            })
	    .catch(err => console.log(err))
    })
}

export const previousPage = (printProducts) => {
    previous.addEventListener('click', ()=> {
	if (page === 1) {}
	    else{
		page -= 1
		    const url = `https://bsale-backend-vyob.onrender.com/api/products?offset=${page}`
			axios.get(url)
                .then(res =>  { printProducts(res.data) 
                    next.classList.remove("hidden") } )
			    .catch(err => console.log(err))
	    }
    })
}
