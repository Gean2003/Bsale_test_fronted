
 let page = 1
export const nextPage = (next, printProducts) => {
    next.addEventListener('click', ()=> {
	page += 1
	const url = `https://bsale-backend-vyob.onrender.com/api/products?offset=${page}`
	axios.get(url)
	    .then(res => res.data.result[0]?printProducts(res.data) : null )
	    .catch(err => console.log(err))
    })
}

export const previousPage = (previous, printProducts) => {
    previous.addEventListener('click', ()=> {
	if (page === 1) {}
	    else{
		page -= 1
		    const url = `https://bsale-backend-vyob.onrender.com/api/products?offset=${page}`
			axios.get(url)
			    .then(res => printProducts(res.data) )
			    .catch(err => console.log(err))
	    }
    })
}
