const next = document.getElementById('btn_next');
const previous = document.getElementById('btn_previous');

const inputSearch = (input, button, printProducts) => {
    button.addEventListener('click', (e) => {
	e.preventDefault()
	const inputValue = input.value.trim()
	SearchByName(inputValue, printProducts)
    })
}

export const SearchByName = (input, printProducts) => {
    const url = `https://bsale-backend-vyob.onrender.com/api/products/search?name=${input}`
    axios.get(url)
	    .then(res => { 
            printProducts(res.data)
            next.classList.add("hidden")
            previous.classList.add("hidden")
            } )
	.catch(err => console.log(err))
}



export default inputSearch
