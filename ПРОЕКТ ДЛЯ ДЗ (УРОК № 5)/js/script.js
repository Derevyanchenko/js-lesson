

var openBtn        = document.querySelector("#open-btn");

let nameValue      = document.querySelector(".name-value");
let budgetValue    = document.querySelector(".budget-value");
let goods_item_btn = document.querySelector(".goods-item-btn");
let goodsValue     = document.querySelector(".goods-value");
let itemsValue     = document.querySelector(".items-value");
let employersValue = document.querySelector(".employers-value");
let discountValue  = document.querySelector(".discount-value");
let isopenValue    = document.querySelector(".isopen-value");

let goodsItem      = document.querySelectorAll(".goods-item");

let buttons 	   = document.querySelector("button"); 

let chooseItems     = document.querySelector('.choose-items');
let choose_item     = document.querySelector('.choose-item');
let time_input      = document.querySelector('.time-value'); 
let countBudget    = document.querySelector('.count-budget-value');  

let employersName  = document.querySelectorAll(".hire-employers-item");

let employers_button  = document.querySelector(".hire-employers-btn");

let isopen = document.querySelector(".isopen-value");

// user functions


let your_budget;
let price;

var mainList = {
		budget: your_budget,
		shopGoods:[],
		employers: {},
		open:false,
		discount: false
};

openBtn.addEventListener("click", () => {

	your_budget = prompt("Ваш бюджет?", "");

	while(isNaN(your_budget) || your_budget == '' || your_budget == null) {
		your_budget = prompt("Ваш бюджет?", "");
	}

	budgetValue.textContent = your_budget;

	nameValue.textContent = prompt("Название вашего магазина?", "");

});

goods_item_btn.addEventListener("click", () => {

	for(let i=0; i < goodsItem.length; i++) {
		let goodsItem_value = goodsItem[i].value;

		if((typeof(goodsItem_value) === "string") && (typeof(goodsItem_value)) !=null) {
			mainList.shopGoods[i] = goodsItem_value;

			goodsValue.textContent = mainList.shopGoods;

		}
	}

});

choose_item.addEventListener("change", () => {
	let choose_item_value = choose_item.value;

	itemsValue.textContent = choose_item_value;
});


time_input.addEventListener("change", () => {

	let time_value = time_input.value;

	if (time_value > 8 && time_value < 20) {
		mainList.open = true;
	}
	else {
		mainList.open = false;
	}
	if (mainList.open = true) {
		isopenValue.style.backgroundColor = "green";
	} 
	else {
		isopenValue.style.backgroundColor = "red";
	}

});

employers_button.addEventListener("click", () => {

	for(i = 0; i < employersName.length; i++) {
		let name = employersName[i].value;

		mainList.employers[i] = name;
		employersValue.textContent += mainList.employers[i] + ", ";

	}

});











