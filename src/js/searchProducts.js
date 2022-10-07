
const inputSearch = (input, button, printProducts) => {
    button.addEventListener('click', (e) => {
	e.preventDefault()
	const inputValue = input.value.trim()
	SearchByName(inputValue, printProducts)
    })
}

export const SearchByName = (input, printProducts) => {
    const url = `https://bsaletestbackend-production.up.railway.app/api/products/q?name=${input}`
    axios.get(url)
	    .then(res => {

    let data = {
		result: res.data
	    }
	    printProducts(data)
	}  )
	.catch(err => console.log(err))
}



export default inputSearch
