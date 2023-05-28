const everyElement = document.querySelectorAll('*')
const body = document.querySelector('body');
const container = document.querySelector('div.container');
const footer = document.querySelector('footer');
const contentDiv = document.querySelector('div.content-div');
const clockText = document.querySelector('p.clock-text');
const darkModeBtn = document.querySelector('.dark-mode-btn');
const projectsLinks = document.querySelectorAll('a.content-link');


// giving right links to a elements

projectsLinks.forEach(a => {
	a.setAttribute('href', `https://${a.innerHTML}`);
});


// progress
	// javascript info
var jSProgressPercentage = 55;
var jSProgressColor = 'yellow';

	// html info
var hTMLProgressPercentage = 65;
var hTMLProgressColor = 'royalblue';
	// css info
var cSSProgressPercentage = 75;
var cSSProgressColor = 'rgb(20,210,135)';

var pYTHONProgressPercentage = 40;

	// elements
const jSprogressBar = document.querySelector('.progreses-container .to-do .js-progress-div');
const jSPercntegeText = document.querySelector('.js-progress-bar');
const hTMLprogressBar = document.querySelector('.html-progress-div');
const hTMLPercntegeText = document.querySelector('.html-progress-bar');
const cSSprogressBar = document.querySelector('.css-progress-div');
const cSSPercntegeText = document.querySelector('.css-progress-bar');


	// apply styles
jSprogressBar.style.background = `conic-gradient(${jSProgressColor} ${jSProgressPercentage * (3.6)}deg, rgba(200,200,200, 0.5) 0deg)`;
jSPercntegeText.style.color = jSProgressColor;
jSPercntegeText.innerHTML = jSProgressPercentage + '%';
hTMLprogressBar.style.background = `conic-gradient(${hTMLProgressColor} ${hTMLProgressPercentage * (3.6)}deg, rgba(200,200,200, 0.5) 0deg)`;
hTMLPercntegeText.style.color = hTMLProgressColor;
hTMLPercntegeText.innerHTML = hTMLProgressPercentage + '%';
cSSprogressBar.style.background = `conic-gradient(${cSSProgressColor} ${cSSProgressPercentage * (3.6)}deg, rgba(200,200,200, 0.5) 0deg)`;
cSSPercntegeText.style.color = cSSProgressColor;
cSSPercntegeText.innerHTML = cSSProgressPercentage + '%';






// dark mode
var dmcounter = 0;
function darkMode() {
	if (darkModeBtn.innerHTML == "DM") {
		darkModeBtn.style.color = 'var(--fg2)';
		body.style.background = 'whitesmoke';
		document.querySelector('h1.my-name').style.color = 'var(--fg2)';
		document.querySelector('p.content-div-title').style.color = 'var(--fg2)';
		document.querySelector('p.my-bio').style.color = 'var(--fg2)';
		document.querySelector('h1.progress-div-title').style.color = 'var(--fg2)';
		document.querySelectorAll('p.progress-title').forEach( pText => {
			pText.style.color = 'var(--fg2)';
		})
		document.querySelector('div.progreses-container').style.background = 'rgb(230,230,230)';
		for (let i = 0; i < document.querySelectorAll('p.content-title').length; i++) {
			document.querySelectorAll('p.content-title')[i].style.color = 'var(--fg2)';
			document.querySelectorAll('a.content-link')[i].style.color = 'var(--fg2)';
			document.querySelectorAll('div.content')[i].style.background = 'var(--wbg3)';
			document.querySelectorAll('div.content')[i].style.borderBottom = '3px var(--dark-main-border-color) solid';
		}
		document.querySelector('.fav-musix-title').style.color = 'var(--fg2)';
		document.querySelectorAll('.musix').forEach(musicDiv => {
			musicDiv.children[0].style.color = (musicDiv.children[1].paused)? 'var(--light-fg)': 'var(--dark-playing-border-color)';
		})
		darkModeBtn.innerHTML = "WM";
		console.log('ee');
		} else {
			body.style.background = 'var(--dark-body-bg)';
			darkModeBtn.style.color = 'var(--dark-containers-bg)';
			document.querySelector('h1.my-name').style.color = 'var(--dark-fg)';
			document.querySelector('p.content-div-title').style.color = 'var(--dark-fg)';
			document.querySelector('p.my-bio').style.color = 'var(--dark-fg)';
			document.querySelector('h1.progress-div-title').style.color = 'var(--dark-fg)';
			document.querySelector('div.progreses-container').style.background = 'var(--dark-containers-bg)';
			document.querySelectorAll('p.progress-title').forEach( pText => {
				pText.style.color = 'var(--fg1)';
			})
			for (let i = 0; i < document.querySelectorAll('p.content-title').length; i++) {
				document.querySelectorAll('p.content-title')[i].style.color = 'var(--dark-fg)';
				document.querySelectorAll('a.content-link')[i].style.color = 'var(--dark-fg)';
				document.querySelectorAll('div.content')[i].style.background = 'var(--bg3)';
				document.querySelectorAll('div.content')[i].style.borderBottom = '0px var(--dark-main-border-color) solid';
			}
			document.querySelector('.fav-musix-title').style.color = 'var(--dark-fg)';
			document.querySelectorAll('.musix').forEach(musicDiv => {
				musicDiv.children[0].style.color = (musicDiv.children[1].paused)? 'var(--dark-fg)': 'var(--dark-playing-border-color)';
			})
			darkModeBtn.innerHTML = "DM";
			console.log('ww');
		}
		if (dmcounter % 2 === 0) {
			document.querySelector('.my-bio').style.color = 'var(--light-fg)';
		} else {
			document.querySelector('.my-bio').style.color = 'var(--dark-fg)';
		}
		dmcounter++
}

darkModeBtn.addEventListener('click',darkMode);
darkMode();

// hover & active effect


	// links hover
const linkHoverColor = '#FF0000';
projectsLinks.forEach(linkElement => {
	linkElement.addEventListener('pointerenter', event =>{
		event.target.style.color = linkHoverColor;
		console.table(event);
	})
	linkElement.addEventListener('pointerout', event =>{
		const linkMainColor = (darkModeBtn.innerHTML == 'WM')? 'rgb(30,30,30)' : 'whitesmoke';
		event.target.style.color = linkMainColor;
		console.table(event);
	})
})


	// progress bars hover
	
document.querySelectorAll('div.progress-div').forEach(progressDivElement => {
	progressDivElement.addEventListener('pointerenter', event => {addAnimationToProgressTitle(event)});
	progressDivElement.addEventListener('pointerout', event => { removeAnimationToProgressTitle(event)});
})


function addAnimationToProgressTitle(event) {
	let progressDivElement = event.target;
	if (darkModeBtn.innerHTML == 'WM') {
		progressDivElement.classList.add('fire-anim-1');
		progressDivElement.classList.remove('fire-anim-2');
	} else {
		progressDivElement.classList.add('fire-anim-2');
		progressDivElement.classList.remove('fire-anim-1');
	}
	progressDivElement.children[0].classList.add('paint-anim');
}

function removeAnimationToProgressTitle(event) {
	let progressDivElement = event.target;
	progressDivElement.classList.remove('fire-anim-2');
	progressDivElement.classList.remove('fire-anim-1');
	progressDivElement.children[0].classList.remove('paint-anim');
}






// fav musix
	document.querySelectorAll('audio').forEach(audioElement => {
		audioElement.addEventListener('play', event => {
			// event.target.style.background = 'none';
			event.target.parentElement.style.borderLeftColor = 'var(--dark-playing-border-color)';
			event.target.previousElementSibling.style.color = 'var(--dark-playing-border-color)';
		})
		audioElement.addEventListener('pause', event => {
			// event.target.style.background = 'rgb(30,30,30)';
			event.target.parentElement.style.borderLeftColor = 'var(--dark-main-border-color)';
			event.target.previousElementSibling.style.color = (darkModeBtn.innerHTML == 'DM')? 'var(--dark-fg)': 'var(--light-fg)';
		})
	})