const everyElement = document.querySelectorAll('*')
const body = document.querySelector('body');
const container = document.querySelector('div.container');
const footer = document.querySelector('footer');
const contentDiv = document.querySelector('div.content-div');
const clockText = document.querySelector('p.clock-text');
const projectsLinks = document.querySelectorAll('a.content-link');



// theme changing


const themes = {
	'blue': {
		'--main-color': 'blue',
		'--box-color': 'royalblue',
		'--under-texts-bottom-color': 'aqua',
		'--left-texts-color': 'aqua',
		'--playing-song-color': 'black',
		'--main-fg': 'white'
	},
	'yellow': {
		'--main-color': 'yellow',
		'--box-color': '#DC3535',
		'--under-texts-bottom-color': '#B01E68',
		'--left-texts-color': '#B01E68',
		'--playing-song-color': 'crimson',
		'--main-fg': 'black'
	},
	'green': {
		'--main-color': 'green',
		'--box-color': 'forestgreen',
		'--under-texts-bottom-color': '#000',
		'--left-texts-color': '#000',
		'--playing-song-color': 'white',
		'--main-fg': 'black'
	},
	'red': {
		'--main-color': 'crimson',
		'--box-color': '#950101',
		'--under-texts-bottom-color': 'white',
		'--left-texts-color': 'white',
		'--playing-song-color': 'black',
		'--main-fg': 'white'
	},
	'dark': {
		'--main-color': 'black',
		'--box-color': 'rgb(30,30,30)',
		'--under-texts-bottom-color': 'whitesmoke',
		'--left-texts-color': 'whitesmoke',
		'--playing-song-color': 'crimson',
		'--main-fg': 'white'
	},
	'light': {
		'--main-color': 'whitesmoke',
		'--box-color': 'rgb(220,220,220)',
		'--under-texts-bottom-color': 'rgb(30,30,30)',
		'--left-texts-color': 'rgb(30,30,30)',
		'--playing-song-color': 'crimson',
		'--main-fg': 'rgb(30,30,30)'
	}
}
const colorThemeBtns = document.querySelectorAll('.color-theme');
var theme;
firstTheme('light');
colorThemeBtns.forEach(themeChangeBtn => {
	themeChangeBtn.addEventListener('click', event => {changeTheme(event)})
})


function firstTheme(startingTheme) {
	colorThemeBtns.forEach(btn => {
		if (btn.classList.contains('active-theme'))
			btn.classList.remove('active-theme');
	})
	theme = startingTheme;
	document.querySelectorAll('div.color-theme').forEach(themeDiv => {
		if (themeDiv.innerHTML == theme)
			themeDiv.classList.add('active-theme');
	})
	document.documentElement.style.setProperty('--main-color', themes[theme]['--main-color']);
	document.documentElement.style.setProperty('--box-color', themes[theme]['--box-color']);
	document.documentElement.style.setProperty('--under-texts-bottom-color', themes[theme]['--under-texts-bottom-color']);
	document.documentElement.style.setProperty('--left-texts-color', themes[theme]['--left-texts-color']);
	document.documentElement.style.setProperty('--playing-song-color', themes[theme]['--playing-song-color']);
	document.documentElement.style.setProperty('--main-fg', themes[theme]['--main-fg']);
}
function changeTheme (event) {
	if (theme != event.target.innerHTML) {
		colorThemeBtns.forEach(btn => {
			if (btn.classList.contains('active-theme'))
				btn.classList.remove('active-theme');
		})
		theme = event.target.innerHTML;
		event.target.classList.add('active-theme');
		body.classList.add('body-change-theme');
		document.documentElement.style.setProperty('--main-color', themes[theme]['--main-color']);
		document.documentElement.style.setProperty('--box-color', themes[theme]['--box-color']);
		document.documentElement.style.setProperty('--under-texts-bottom-color', themes[theme]['--under-texts-bottom-color']);
		document.documentElement.style.setProperty('--left-texts-color', themes[theme]['--left-texts-color']);document.documentElement.style.setProperty('--playing-song-color', themes[theme]['--playing-song-color']);
		document.documentElement.style.setProperty('--main-fg', themes[theme]['--main-fg']);
	}
}



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

// hover & active effect


	// links hover
const linkHoverColor = 'aqua';
projectsLinks.forEach(linkElement => {
	linkElement.addEventListener('pointerenter', event =>{
		event.target.style.color = linkHoverColor;
	})
	linkElement.addEventListener('pointerout', event =>{
		event.target.style.color = 'var(--main-fg)';
	})
})


	// progress bars hover
	
document.querySelectorAll('div.progress-div').forEach(progressDivElement => {
	progressDivElement.addEventListener('pointerenter', event => {addAnimationToProgressTitle(event)});
	progressDivElement.addEventListener('pointerout', event => { removeAnimationToProgressTitle(event)});
})


function addAnimationToProgressTitle(event) {
	let progressDivElement = event.target;
	progressDivElement.classList.remove('scale-up-anim');
	progressDivElement.classList.remove('fire-anim-2');
	progressDivElement.classList.add('fire-anim-1');
	progressDivElement.children[0].classList.add('paint-anim');
}

function removeAnimationToProgressTitle(event) {
	let progressDivElement = event.target;
	progressDivElement.classList.remove('fire-anim-2');
	progressDivElement.classList.remove('fire-anim-1');
	progressDivElement.children[0].classList.remove('paint-anim');
}






// playing song play event
	document.querySelectorAll('audio').forEach(audioElement => {
		audioElement.addEventListener('play', event => {
			// event.target.style.background = 'none';
			event.target.parentElement.style.borderLeftColor = 'var(--playing-song-color)';
			event.target.previousElementSibling.style.color = 'var(--playing-song-color)';
		})
		audioElement.addEventListener('pause', event => {
			// event.target.style.background = 'rgb(30,30,30)';
			event.target.parentElement.style.borderLeftColor = 'var(--left-texts-color)';
			event.target.previousElementSibling.style.color = 'var(--main-fg)';
		})
	})



// appear on scroll
const songBoxes = document.querySelectorAll('.musix');
const contentBoxes = document.querySelectorAll('.content');
const progresContainer = document.querySelector('.progreses-container');
const profileDiv = document.querySelector('.profile-div');
appearOnScroll();
window.addEventListener('scroll', appearOnScroll);
function appearOnScroll() {
	const triggerBottom = window.innerHeight;
	profileDiv.classList.add('scale-up-anim');
	contentBoxes.forEach(contentChild => {
		if (contentChild.getBoundingClientRect().top < triggerBottom) {
			contentChild.classList.add('scale-up-anim');
			contentChild.style.marginTop = '0';

		}
	})
	// if (contentDiv.getBoundingClientRect().top < triggerBottom) {
		if (document.querySelector('.fav-musix').getBoundingClientRect().top < triggerBottom) {
			songBoxes.forEach(musixChild => {
				if (musixChild.getBoundingClientRect().top < triggerBottom) {
					musixChild.style.marginTop= '0';
					musixChild.children[0].classList.add('scale-up-anim')
				}
			})
		}
	// }
	if (progresContainer.getBoundingClientRect().top < triggerBottom) {
		// progresContainer.style.columnGap = '0';
		document.querySelectorAll('.progreses-container p.progress-title').forEach(progressTitleText => {
			progressTitleText.classList.add('scale-up-anim');
			progressTitleText.nextElementSibling.classList.add('scale-up-anim');
		})
	}
}