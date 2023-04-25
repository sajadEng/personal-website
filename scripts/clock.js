const date = new Date();
clockText.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
setInterval(function() {
	const date = new Date();
	function h() {
		let i = date.getHours();
		i = i.toString();
		if (i.length < 2) {
			i = `0${i}`
		}
		return i
	}
	function m() {
		let i = date.getMinutes();
		i = i.toString();
		if (i.length < 2) {
			i = `0${i}`
		}
		return i
	}
	function s() {
		let i = date.getSeconds();
		i = i.toString();
		if (i.length < 2) {
			i = `0${i}`
		}
		return i
	}
	clockText.innerHTML = `${h()}:${m()}:${s()}`
},1000)