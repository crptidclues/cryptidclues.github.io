(async function () {

	const topicList = document.getElementById('topics');
	if (!topicList) return;

	const packageIndex = [
		'packages/hidden-sky-stars/manifest.json',
		'packages/seen-sky-stars/manifest.json'
		// future packages get added here OR auto-generated later
	];

	for (const path of packageIndex) {
		const res = await fetch(path);
		const data = await res.json();

		const li = document.createElement('li');
		const a = document.createElement('a');

		a.href = `packages/${data.id}/${data.entry}`;
		a.textContent = data.title;

		li.appendChild(a);
		topicList.appendChild(li);
	}

})();
