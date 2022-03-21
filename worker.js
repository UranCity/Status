async function checkStatus() {
	await fetch("https://api.mcsrvstat.us/simple/mc.urancity.ml").then((res) => {
		if (res.status === 200 || res.status === 404) {
			return res.status;
		} else {
			console.warn(`Mauvais status renvoyé (${res.status}) (mcsrvstat.us)`);
			return undefined;
		}
	});
}

async function handleRequest(request) {
	return Response.redirect(
		`https://raw.githubusercontent.com/UranCity/Status/main/assets/${checkStatus()}.png`,
		303
	);
}

addEventListener("fetch", async (event) => {
	event.respondWith(handleRequest(event.request));
});