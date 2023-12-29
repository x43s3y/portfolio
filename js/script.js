let going = false;
let currentEl = null;
let cardEl = document.querySelector('.card');
let informationEl = document.querySelector('.introduction');
const lang_buttons = document.querySelectorAll('.lang-button');

for (let button of lang_buttons) {
	button.addEventListener('click', () => {
		if (going) return;
		going = true;
		if (button.className.includes('active')) {
			button.className = 'lang-button';
			reverseDot();
			setTimeout(() => {
				cardEl.classList.remove('active');
				informationEl.classList.remove('active');
				going = false;
			}, 100);
			return;
		}

		//remove underline from old lang
		if (currentEl) {
			currentEl.className = 'lang-button';
			reverseDot();
		}
		button.className = 'lang-button active';

		currentEl = button;
		cardEl.classList.add('active');
		informationEl.classList.add('active');

		let panel = document.getElementById(button.getAttribute('data-panel'));

		//activate animation
		setTimeout(() => {
			panel.classList.add('shown');
			going = false;
		}, 500)

		setTimeout(() => {
			panel.classList.add('expand');
		}, 250);


		// Animate all the children
		let divs = panel.querySelectorAll('.projects>.proj');
		let timeout = 200;
		for (let div of divs) {
			setTimeout(() => div.classList.add('loaded'), timeout);
			timeout += 200;
		}

		for (let div of divs) {
			div.classList.remove('loaded');
		}


	});
}


function reverseDot() {
	let shownPanel = document.querySelector('.dot.shown');
	if (shownPanel) {
		shownPanel.classList.remove('shown');
		shownPanel.classList.remove('expand');
	}
}