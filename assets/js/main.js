
var inputBox = document.getElementById('tb-search')
var displayBox = document.getElementById('tb-response')

async function getNations() {
	let keyword = inputBox.value
	let response = null

	if (keyword) {
		response = await fetch('https://restcountries.com/v3.1/name/'+keyword)
	}
	else {
		response = await fetch('https://restcountries.com/v3.1/all')
	}
	response = await response.json()

	let no_of_nations = countNations(response)

	displayBox.value = ""

	if (no_of_nations > 1) {
		for (i = 0; i < no_of_nations; i++) {
			nation = response[i]
			displayBox.value += nation["name"]["common"] + "\n"
		}
	}
	else {
		nation = response[0]
		displayBox.value += nation["name"]["common"] + "\n"
	}
}

function countNations(res) {
	let len = res.length
	console.log(len)
	return len
}
