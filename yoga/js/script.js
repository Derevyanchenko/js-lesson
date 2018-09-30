

window.addEventListener("DOMContentLoaded", function() {

	let tab 		= document.getElementsByClassName("info-header-tab");
	let tab_content = document.getElementsByClassName("info-tabcontent");
	let tab_first 	= document.getElementsByClassName("info-header")[0];


	function hideTabContent(a) {

		for (let i=a; i<tab_content.length; i++) {
			tab_content[i].classList.remove("show");
			tab_content[i].classList.add("hide");
		}

	}

	hideTabContent(1)

	function showTabContent(b) {
		if(tab_content[b].classList.contains("hide")) {
			hideTabContent(0);
			tab_content[b].classList.remove("hide");
			tab_content[b].classList.add("show");
		}
	}

	tab_first.addEventListener("click", function(event) {
		let target = event.target;

		if(target.className = "info-header-tab") {
			for(let i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		};
	});

	// popup

	let more    = document.querySelector(".more"),
		close   = document.querySelector(".popup-close"),
		body    = document.querySelector("body"),
		overlay = document.querySelector(".overlay");

	more.addEventListener("click", function() {
		overlay.style.display = "block";
		body.style.overflow = "hidden";
	});

	close.addEventListener("click", function() {
		overlay.style.display = "none";
		body.style.overflow = "";
	});

	let info = document.querySelector(".info");

	info.addEventListener("click", function(event) {
		if (event.target.className == "description-btn") {
			overlay.style.display = "block";
			body.style.overflow = "hidden";
		}
	});

	// ajax form send

	// let message = new Object(),
	// 	message_success = "Данные были успешно отправлены",
	// 	message_loading = "Загрузка...",
	// 	message_failed = "Что-то пошло не так";

	// let form  = document.querySelector("form"),
	// 	input =	form.querySelector("input"),
	// 	status_message = document.createElement("div");
		

	// form.addEventListener("submit", function(event) {
	// 	console.log(true);
	// 	event.preventDefault();
	// 	form.appendChild(status_message);

	// 	// ajax

	// 	let request = new XMLHttpRequest();

	// 	request.open("POST", "server.php");
	// 	request.setRequestHeader("Content-type", "application/x-www-form-unlencoded");

	// 	let formData = new formData(form);

	// 	// get request from form

	// 	request.send(formData);

	// 	// send

	// 	request.onreadystatechange = function() {
	// 		if (request.readyState < 4) {
	// 			status_message.innerHTML = message_loading;
	// 		}
	// 		else if (request.readyState === 4) {
	// 			if (request.status == 200 && request.status < 300) {
	// 				status_message.innerHTML = message_success;
	// 			} 
	// 			else {
	// 				status_message.innerHTML = message_failed;
	// 			}
	// 		}
	// 	}

	// 	for (let i = 0; i < input.length; i++) {
	// 		input[i].value = "";
	// 	}
	// });

	// slider

	let slideIndex = 1,
		slides = document.getElementsByClassName("slider-item"),
		prev = document.querySelector(".prev"),
		next = document.querySelector(".next"),
		dotsWrap = document.querySelector(".slider-dots"),
		dots = document.getElementsByClassName("dot");

		showSlides(slideIndex);

		function showSlides(n) {
			if (n > slides.length) {
				slideIndex = 1;
			};
			if (n < 1) {
				slideIndex = slides.length;
			};
			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			for (let i = 0; i < slides.length; i++) {
				dots[i].classList.remove("dot-active");
			}
			slides[slideIndex - 1].style.display = "block";
			dots[slideIndex - 1].classList.add("dot-active");
		}

		function plusSlides(n) {
			showSlides(slideIndex = slideIndex + n);
		}

		function currentSlide(n) {
			showSlides(slideIndex = n)
		}

		prev.addEventListener("click", function() {
			plusSlides(-1);
		});

		next.addEventListener("click", function() {
			plusSlides(1);
		});

		dotsWrap.addEventListener("click", function (event) {
			for (let i = 0; i < dots.length+1; i++) {
				if(event.target.classList.contains("dot") && event.target == dots[i-1]) {
					currentSlide(i);
				}
			}
		});

	// калькулятор

	let persons 	 = document.getElementsByClassName("counter-block-input")[0],
		days 		 = document.getElementsByClassName("counter-block-input")[1],
		place 		 = document.getElementById("select"),
		result_value = document.querySelector(".counter-total"),
		persons_sum  = 0,
		days_sum 	 = 0,
		result 		 = 0;

	result_value.innerHTML = result;

	persons.addEventListener("change", function() {
		persons_sum =+ this.value;
		result = (persons_sum + days_sum) * 4000;
		if(days.value == "") {
			result_value.innerHTML = 0;
		}
		else {
			result_value.innerHTML = result;
		}
	});

	days.addEventListener("change", function() {
		days_sum =+ this.value;
		result = (persons_sum + days_sum) * 4000;
		if (persons.value == "") {
			result_value.innerHTML = 0;
		}
		else {
			result_value.innerHTML = result;
		}
	});

	place.addEventListener("change", function() {
		if(days.value == "" || persons.value == "") {
			result_value.innerHTML = 0;
		}
		else {
			let a = result;
			result_value.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});






});

