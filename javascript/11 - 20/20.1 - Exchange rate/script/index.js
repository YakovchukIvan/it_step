"use strict"

const url = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";
const usd1 = document.querySelector(".usd1")
const usd2 = document.querySelector(".usd2")

const eur1 = document.querySelector(".eur1")
const eur2 = document.querySelector(".eur2")


async function privatbank(url) {
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log('res: ', res);
    console.log('data: ', data);
    const eur = data[0]
    console.log('eur: ', eur);
    const usd = data[1]
    console.log('usd: ', usd);

    n1and1(eur.ccy)
    n1and2(eur.base_ccy)
    n1and3(eur.buy)
    n1and4(eur.sale)

    n2and1(usd.ccy)
    n2and2(usd.base_ccy)
    n2and3(usd.buy)
    n2and4(usd.sale)

  } catch (error) {
    
  }
}
privatbank(url)

function n1and1(usd) {
  const content = document.querySelector(".n1and1")
  content.innerHTML = usd;
}
function n1and2(usd) {
  const content = document.querySelector(".n1and2")
  content.innerHTML = usd;
}
function n1and3(usd) {
  const content = document.querySelector(".n1and3")
  content.innerHTML = usd;
}
function n1and4(usd) {
  const content = document.querySelector(".n1and4")
  content.innerHTML = usd;
}


function n2and1(euro) {
  const content = document.querySelector(".n2and1")
  content.innerHTML = euro;
}
function n2and2(euro) {
  const content = document.querySelector(".n2and2")
  content.innerHTML = euro;
}

function n2and3(euro) {
  const content = document.querySelector(".n2and3")
  content.innerHTML = euro;
}
function n2and4(euro) {
  const content = document.querySelector(".n2and4")
  content.innerHTML = euro;
}

const input__valute = document.querySelector(".input__valute")
const item__eur = document.querySelector(".item__option-eur")
const item__usd = document.querySelector(".item__option-usd")
const btn__convertor = document.querySelector(".btn__convertor")
const out__valute = document.querySelector(".out__valute")


btn__convertor.addEventListener("click", () => {
  if (item__eur === true) {
    console.log("item__eur");
  } else {console.log("item__usd")}
})








