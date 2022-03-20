async function handleRequest(request) {
	let status;

	fetch("https://api.mcsrvstat.us/simple/mc.urancity.ml").then((res) => {
		if (res.status == 200 || res.status == 404) {
			status = res.status;
		} else {
			throw `Mauvais status renvoyé (${res.status}) (mcsrvstat.us)`;
		};
	});
	
	return Response.redirect(
		`https://raw.githubusercontent.com/UranCity/Status/main/assets/${status}.png`,
		303
	);
}

addEventListener("fetch", async (event) => {
	event.respondWith(handleRequest(event.request));
});
