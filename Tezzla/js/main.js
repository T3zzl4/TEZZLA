window.addEventListener('scroll', function () {
	const header = document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 0);
});

function menuToggle() {
	const menuToggle = document.querySelector('.menuToggle');
	const menu = document.querySelector('.navigation');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
}

const typed = new Typed('.typed', {
	strings: [
		'<i class="experto">Desarrollo web </i>',
		'<i class="experto">Ilustración </i>',
		'<i class="experto">Creación de marca </i>'
	],
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '>', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


/*Librería de Muuri*/


let list = document.getElementsByClassName('list');
let itemBox = document.getElementsByClassName('itemBox');

for (let i = 0; i < list.length; i++) {
	list[i].addEventListener('click', function () {
		for (let j = 0; j < list.length; j++) {
			list[j].classList.remove('active');
		}
		this.classList.add('active');

		let dataFilter = this.getAttribute('data-filter');

		for (let k = 0; k < itemBox.length; k++) {
			itemBox[k].classList.remove('active');
			itemBox[k].classList.add('hide');

			if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
				itemBox[k].classList.remove('hide');
				itemBox[k].classList.add('active');
			}
		}
	});
}


document.querySelectorAll('.trabajos img').forEach(itemBox => {
	itemBox.onclick = () => {
		document.querySelector('.popup__img').style.display = 'block';
		document.querySelector('.popup__img img').src = itemBox.getAttribute('src');
	}
});

document.querySelectorAll('.trabajos img').forEach(itemBox => {
	itemBox.onclick = () => {
		document.querySelector('.popup__img').style.display = 'block';
		document.querySelector('.popup__img img').src = itemBox.getAttribute('src');
	}
});

document.querySelector('.popup__img span').onclick = () => {
	document.querySelector('.popup__img').style.display = 'none';
	document.querySelector('.description_1').style.display = 'none';
	document.querySelector('.description_2').style.display = 'none';
	document.querySelector('.description_3').style.display = 'none';
	document.querySelector('.description_4').style.display = 'none';
	document.querySelector('.description_5').style.display = 'none';
	document.querySelector('.description_6').style.display = 'none';
	document.querySelector('.description_7').style.display = 'none';
	document.querySelector('.description_8').style.display = 'none';
	document.querySelector('.description_9').style.display = 'none';
}

document.querySelector('.popup__img .back-black').onclick = () => {
	document.querySelector('.popup__img').style.display = 'none';
	document.querySelector('.description_1').style.display = 'none';
	document.querySelector('.description_2').style.display = 'none';
	document.querySelector('.description_3').style.display = 'none';
	document.querySelector('.description_4').style.display = 'none';
	document.querySelector('.description_5').style.display = 'none';
	document.querySelector('.description_6').style.display = 'none';
	document.querySelector('.description_7').style.display = 'none';
	document.querySelector('.description_8').style.display = 'none';
	document.querySelector('.description_9').style.display = 'none';
}

function description_1() {
	document.querySelector('.description_1').style.display = 'block';
}

function description_2() {
	document.querySelector('.description_2').style.display = 'block';
}

function description_3() {
	document.querySelector('.description_3').style.display = 'block';
}

function description_4() {
	document.querySelector('.description_4').style.display = 'block';
}

function description_5() {
	document.querySelector('.description_5').style.display = 'block';
}

function description_6() {
	document.querySelector('.description_6').style.display = 'block';
}

function description_7() {
	document.querySelector('.description_7').style.display = 'block';
}

function description_8() {
	document.querySelector('.description_8').style.display = 'block';
}

function description_9() {
	document.querySelector('.description_9').style.display = 'block';
}



/*Rolling text*/

let elements = document.querySelectorAll(".rolling-text");

elements.forEach((element) =>{
    let innerText = element.innerHTML;
    element.innerHTML = "";

    let textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for(let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
});

elements.forEach((element) =>{
    element.addEventListener("mouseover", () => {
        element.classList.remove("play");
    })
})