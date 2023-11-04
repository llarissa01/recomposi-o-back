// local reviews data
let actid = 0;

const reviews = [
	{
		name: 'susan smith',
		job: 'web developer',
		img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		name: 'anna johnson',
		job: 'web designer',
		img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
		text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
		name: 'peter jones',
		job: 'intern',
		img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
		text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	},
	{
		name: 'bill anderson',
		job: 'the boss',
		img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
		text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	}
];

// selecionar todos os elemntos que irão mudar
const author = document.getElementById('author');
const job = document.getElementById('job');
const img = document.getElementById('person-img');
const info = document.getElementById('info');

// selecionar os elementos que vão ter ação
const prevBtn =  document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

function change(id){
	let item = reviews[id];

	actid = id;
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', ()=>{
	change(actid);
})

prevBtn.addEventListener("click", function(){
	if(actid > 0){
		change(actid - 1);
	}
});

nextBtn.addEventListener("click", function(){
	if(actid < 3){
		change(actid + 1);
	}
});

randomBtn.addEventListener("click", function(){
	change(Math.floor(Math.random() * 4));
});