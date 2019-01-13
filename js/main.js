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
var scrollFullPage = document.querySelector('.arrow-1');

scrollFullPage.addEventListener('click', function() {
	window.scroll({
		top: window.innerHeight,
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


// p1.addEventListener('mouseover', function(event) {
// 	p1.classList.add('actif');
// 	p1Middle.classList.add('projet_actif');
// 	p1Left.classList.add('visuel_actif');
// 	p1Right.classList.add('visuel_actif');
// 	//
// 	p2Middle.classList.remove('projet_actif');
// 	p2Middle.classList.remove('projet_actif');
// 	p2.classList.remove('actif');
// 	p2Left.classList.remove('visuel_actif');
// 	p2Right.classList.remove('visuel_actif');
// });
//
// p2.addEventListener('click', function(event) {
// 	p2Middle.classList.add('projet_actif');
// 	p2.classList.add('actif');
// 	p2Left.classList.add('visuel_actif');
// 	p2Right.classList.add('visuel_actif');
// 	//
// 	p1.classList.remove('actif');
// 	p1Middle.classList.remove('projet_actif');
// 	p1Left.classList.remove('visuel_actif');
// 	p1Right.classList.remove('visuel_actif');
// });