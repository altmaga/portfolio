// Animation 1 - Scroll déplacement côté noir

// myContentDark = document.querySelector('.content-dark');
myAbout = document.querySelector('#about');
var firstScroll = false;
window.addEventListener("wheel", function(e) {
	if (!firstScroll) {
		e.preventDefault();
		myAbout.classList.add('anim_test');
		// myAbout.classList.add('visible');
		setTimeout(function() {
			firstScroll = true;
		}, 800);
	}
});

// Scroll animation portfolio
var scrollFullPageDown = document.querySelector('.arrow-1');
var scrollFullPageUp = document.querySelector('.arrow-2');

scrollFullPageDown.addEventListener('click', function() {
	window.scroll({
		top: window.innerHeight,
		left: 0,
		behavior: 'smooth',
	});
});

scrollFullPageUp.addEventListener('click', function() {
	window.scroll({
		top: -window.innerHeight,
		left: 0,
		behavior: 'smooth',
	});
});

// Animation Projets

// Les projets
var descProjets = document.querySelectorAll('.liste_projet');

descProjets.forEach(function(event) {
	event.addEventListener('click', function() {
		var target = event.dataset.target;
		var myTarget = document.querySelector('#' + target);
		myTarget.classList.toggle('actif');
		console.log(myTarget);
		console.log(target);
	});

});