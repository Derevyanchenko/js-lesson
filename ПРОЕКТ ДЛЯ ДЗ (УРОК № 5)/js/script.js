

var openBtn        = document.querySelector("#open-btn");

let nameValue      = document.querySelector(".name-value");
let budgetValue    = document.querySelector(".budget-value");
let goodsValue     = document.querySelector(".goods-value");
let itemsValue     = document.querySelector(".items-value");
let employersValue = document.querySelector(".employers-value");
let discountValue  = document.querySelector(".discount-value");
let isopenValue    = document.querySelector(".isopen-value");

let goodsItem      = document.querySelectorAll(".goods-item");

let buttons 	   = document.querySelector("button"); 

let choseItems     = document.querySelector('.choose-items');
let timeValue      = document.querySelector('.time-value'); 
let countBudget    = document.querySelector('.count-budget-value');  

let employersName  = document.querySelectorAll(".hire-employers-item");

// user functions


let your_budget;
let price;


openBtn.addEventListener("click", () => {

	your_budget = prompt("Ваш бюджет?", "");

	while(isNaN(your_budget) || your_budget == '' || your_budget == null) {
		your_budget = prompt("Ваш бюджет?", "");
	}

	budgetValue.textContent = your_budget;

	nameValue.textContent = prompt("Название вашего магазина?", "");

});



var mainList = {
		budget:yourBudget,
		shopName:nameOfYourShop,
		shopGoods:[],
		employers: {},
		open:false,
		discount: false,
};



function userAnswers() {
	for(let i=0; i<3; i++) {
		let answer = prompt("Какой тип товаров будем продавать?");
		mainList.shopGoods[i] = answer;
	};
};


alert(yourBudget / 30);
console.log(mainList);


