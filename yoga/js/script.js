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

});

