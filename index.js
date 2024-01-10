//hamburger button//
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const navLink = document.querySelectorAll(".navitem");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("show");
  navMenu.classList.toggle("show");
  navMenu.style.left = navMenu.style.left === "0px" ? `-${navMenu.offsetWidth}px` : "0";
}

navLink.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  hamburger.classList.remove("show");
  navMenu.classList.remove("show");
  navMenu.style.left = `-${navMenu.offsetWidth}px`;
}
//price toggle//
let btncolor=document.getElementById("btncolor");
let monthly=document.getElementById("monthly");
let yearly=document.getElementById("yearly");

let isMonthly = true;
let globalCurrency = 'USD';
//fetch api on page load//
document.addEventListener('DOMContentLoaded', function () {
  fetchExchangeRates();
});
yearly.addEventListener("click",function(){
  btncolor.style.left="110px"
  togglePlan('yearly');
})
monthly.addEventListener("click",function(){
  btncolor.style.left="0px"
  togglePlan('monthly');
})
document.getElementById('currency').addEventListener('change', function () {
  toggleGlobalCurrency(this.value);
});

function togglePlan(plan) {
  isMonthly = plan === 'monthly';
  updatePrices();
}

function toggleGlobalCurrency(selectedCurrency) {
  globalCurrency = selectedCurrency;
  updatePrices();
}
let exchangeRates;

function fetchExchangeRates() {
  const apiKey = '187a29081ac54481c984c1e6';
  const apiUrl = `https://open.er-api.com/v6/latest/USD?apikey=${'187a29081ac54481c984c1e6'}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      exchangeRates = data.rates;
      updatePrices();
    })
    .catch(error => console.error('Error fetching exchange rates:', error));
}

function updateExchangeRates(rates) {
  exchangeRates = rates;
  updatePrices();
}

document.addEventListener('DOMContentLoaded', function () {
  fetchExchangeRates();
});

document.getElementById('monthly').addEventListener('click', function () {
  btncolor.style.left = '0px';
  togglePlan('monthly');
});

document.getElementById('yearly').addEventListener('click', function () {
  btncolor.style.left = '110px';
  togglePlan('yearly');
});

document.getElementById('currency').addEventListener('change', function () {
  toggleGlobalCurrency(this.value);
});

function togglePlan(plan) {
  isMonthly = plan === 'monthly';
  updatePrices();
}

function toggleGlobalCurrency(selectedCurrency) {
  globalCurrency = selectedCurrency;
  updatePrices();
}

function updatePrices() {
  if (!exchangeRates) {
    console.error('Exchange rates not available.');
    return;
  }

  const usdToInrRate = exchangeRates['INR'];

  const basicPrice = isMonthly ? (globalCurrency === 'USD' ? '$10/month' : `₹${Math.round(10 * usdToInrRate)}/month`) : (globalCurrency === 'USD' ? '$100/year' : `₹${Math.round(100 * usdToInrRate)}/year`);
  const advancedPrice = isMonthly ? (globalCurrency === 'USD' ? '$20/month' : `₹${Math.round(20 * usdToInrRate)}/month`) : (globalCurrency === 'USD' ? '$200/year' : `₹${Math.round(200 * usdToInrRate)}/year`);
  const proPrice = isMonthly ? (globalCurrency === 'USD' ? '$30/month' : `₹${Math.round(30 * usdToInrRate)}/month`) : (globalCurrency === 'USD' ? '$300/year' : `₹${Math.round(300 * usdToInrRate)}/year`);

  document.getElementById('basicPrice').innerText = basicPrice;
  document.getElementById('advancedPrice').innerText = advancedPrice;
  document.getElementById('proPrice').innerText = proPrice;
}
//card hover
const cards = document.querySelectorAll(".card1");

cards.forEach((card) => {
  let button = card.querySelector(".basic-btn");
  let listItems = card.querySelectorAll(".feautre li");

  card.addEventListener("mouseover", function () {
    card.style.backgroundColor = "#410ff8";
    card.style.color = "#fff";

    if (button) {
      button.style.backgroundColor = "#fff";
      button.style.color = "#410ff8";
    }

    listItems.forEach((li) => {
      li.style.color = "#fff";  
    });
  });

  card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "";
    card.style.color = "";

    if (button) {
      button.style.backgroundColor = "";
      button.style.color = "";
    }

    listItems.forEach((li) => {
      li.style.color = "";  
    });
  });

  card.style.transition = "background-color 0.4s ease, color 0.3s ease";

  if (button) {
    button.style.transition = "background-color 0.4s ease, color 0.3s ease";
  }
});


