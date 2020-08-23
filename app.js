window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://covid19.mathdro.id/api/countries/Indonesia')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
        console.log(data);
		let update = data.lastUpdate;
		let confirmedCases = data.confirmed.value;
        let deaths = data.deaths.value;
		let recovered = data.recovered.value;

		document.getElementById('update').innerHTML = new Date(update).toISOString().slice(0, 10);;
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
        document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
        document.getElementById('recovered').innerHTML = recovered.toLocaleString('en');
	})
	.catch(function() {
		console.log("error");
	});
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}