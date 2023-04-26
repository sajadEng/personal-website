const everyElement = document.querySelectorAll('*')
const body = document.querySelector('body');
const container = document.querySelector('div.container');
const footer = document.querySelector('footer');
const contentDiv = document.querySelector('div.content-div');
const clockText = document.querySelector('p.clock-text');
const darkModeBtn = document.querySelector('.dark-mode-btn');
const request = new XMLHttpRequest();

request.open("GET", 'jSON/websites.json');

request.send();
request.onload = function() {
	if (request.status === 200) {
		const data = JSON.parse(request.responseText);
		for (let i = 0; i < data.length; i++) {
			const contentContainer = document.createElement('div');
			contentContainer.classList.add('content');

			const titleP = document.createElement('p');
			titleP.classList.add('content-title');
			titleP.innerHTML = data[i].title;

			const linkA = document.createElement('a');
			linkA.classList.add('content-link');
			linkA.innerHTML = data[i].githubLink;
			linkA.setAttribute('href', data[i].githubLink)

			contentContainer.append(titleP);
			contentContainer.append(linkA);
			contentDiv.append(contentContainer);
		}


		console.log(data);
	} else {
		console.log('error:'+ request.statusText)
	}
}


var dmcounter = 0;
darkModeBtn.addEventListener('click', event => {
	if (darkModeBtn.innerHTML == "DM") {
	darkModeBtn.style.color = 'var(--fg2)';
	bgContainerDiv.style.background = 'whitesmoke';
	document.querySelector('h1.my-name').style.color = 'var(--fg2)';
	document.querySelector('p.content-div-title').style.color = 'var(--fg2)';
	document.querySelector('p.my-bio').style.color = 'var(--fg2)';
	for (let i = 0; i < document.querySelectorAll('p.content-title').length; i++) {
		document.querySelectorAll('p.content-title')[i].style.color = 'var(--fg2)';
		document.querySelectorAll('a.content-link')[i].style.color = 'var(--fg2)';
		document.querySelectorAll('div.content')[i].style.background = 'var(--wbg3)';
		document.querySelectorAll('div.content')[i].style.borderBottom = '3px darkred solid';
		}
	darkModeBtn.innerHTML = "WM";
	console.log('ee');
	} else {
		darkModeBtn.style.color = 'var(--fg1)';
		bgContainerDiv.style.background = 'black';
		// document.querySelector('p.my-bio').style.color = 'var(--fg1)';
		document.querySelector('h1.my-name').style.color = 'var(--fg1)';
		document.querySelector('p.content-div-title').style.color = 'var(--fg1)';
		document.querySelector('p.my-bio').style.color = 'var(--fg2)';
		for (let i = 0; i < document.querySelectorAll('p.content-title').length; i++) {
			document.querySelectorAll('p.content-title')[i].style.color = 'var(--fg1)';
			document.querySelectorAll('a.content-link')[i].style.color = 'var(--fg1)';
			document.querySelectorAll('div.content')[i].style.background = 'var(--bg3)';
			document.querySelectorAll('div.content')[i].style.borderBottom = '0px darkred solid';
		}
		darkModeBtn.innerHTML = "DM";
		console.log('ww');
	}
	if (dmcounter % 2 === 0) {
		document.querySelector('.my-bio').style.color = 'var(--fg2)';
	} else {
		document.querySelector('.my-bio').style.color = 'var(--fg1)';
	}
	dmcounter++
})