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




// dark mode
var dmcounter = 0;
function darkMode() {
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
			document.querySelectorAll('div.s-background-div').forEach(star => {
				star.style.background = 'black';
			})
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
				for (let j = 0; j < document.querySelectorAll('div.s-background-div').length; j++) {
					document.querySelectorAll('div.s-background-div')[j].style.background = 'royalblue';
				}
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
darkMode();
darkModeBtn.addEventListener('click',darkMode);