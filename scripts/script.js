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
			document.querySelectorAll('div.content')[i].style.borderBottom = '3px darkred solid';
			}
		darkModeBtn.innerHTML = "WM";
		console.log('ee');
		} else {
			body.style.background = 'black';
			darkModeBtn.style.color = 'var(--fg1)';
			document.querySelector('h1.my-name').style.color = 'var(--fg1)';
			document.querySelector('p.content-div-title').style.color = 'var(--fg1)';
			document.querySelector('p.my-bio').style.color = 'var(--fg2)';
			document.querySelector('h1.progress-div-title').style.color = 'var(--fg1)';
			document.querySelector('div.progreses-container').style.background = 'rgb(30,30,30)';
			document.querySelectorAll('p.progress-title').forEach( pText => {
				pText.style.color = 'var(--fg1)';
			})
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
}

darkModeBtn.addEventListener('click',darkMode);