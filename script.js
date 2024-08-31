let g = document.getElementsByClassName('g-child');

let parent = document.getElementsByClassName('g-child-elem');
let child_1 = parent[0].children[1];
let child_2 = parent[1].children[1];

child_1.style.width = ((g[0].clientWidth/100) * 48) + `px`;
	child_2.style.width = ((g[0].clientWidth/100) * 48) + `px`;

window.addEventListener('resize', function() {
	child_1.style.width = ((g[0].clientWidth/100) * 48) + `px`;
	child_2.style.width = ((g[0].clientWidth/100) * 48) + `px`;
});