
var inputBox = document.getElementById('tb-search')
var displayBox = document.getElementById('tb-response')

async function getNations() {
	let keywords = inputBox.value
	let response, results

	if (!keywords) {
		console.log("getNations() keywords NOT given")														/* Debug message */
		listAllNations()
		console.log("getNations() listAllNations() returned")											/* Debug message */
		console.log("getNations() finished")																			/* Debug message */
		return
	}

	console.log("getNations() keywords given")																	/* Debug message */

	response = await fetch('https://restcountries.com/v3.1/name/'+keywords)
	response = await response.json()

	console.log("getNations() API response received")														/* Debug message */

	results = countResults(response)

	console.log("getNations() countResults() returned")													/* Debug message */

	displayBox.value = ""

	console.log("getNations() displayBox cleared")															/* Debug message */

	if (results > 1) {
		console.log("getNations() if{} results > 1")															/* Debug message */
		for (i = 0; i < results; i++) {
			nation = response[i]
			displayBox.value += (i+1) + ".\t" +  nation["name"]["common"] + "\n"
		}
	}
	else {
		console.log("getNations() else{} results <= 1")														/* Debug message */
		nation = response[0]
		displayBox.value += nation["name"]["common"] + "\n"
	}
	console.log("getNations() finished")																				/* Debug message */
}

async function listAllNations() {
	let response, results
	response = await fetch('https://restcountries.com/v3.1/all')
	response = await response.json()
	results = countResults(response)

	displayBox.value = ""
	for (i = 0; i < results; i++) {
		nation = response[i]
		displayBox.value += (i+1) + ".\t" + nation["name"]["common"] + "\n"
	}

}

function countResults(res) {
	let len = res.length
	console.log("countResults() received " + len + " results")
	return len
}
