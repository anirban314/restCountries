
var inputBox = document.getElementById('tb-search')
var displayBox = document.getElementById('tb-response')

async function getCountry() {
	let country = inputBox.value
	let response = await fetch('https://restcountries.com/v3.1/name/'+country)
	response = await response.text()
	displayBox.value = response
}
