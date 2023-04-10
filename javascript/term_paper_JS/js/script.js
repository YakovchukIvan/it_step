"use strict"

const btnSearch = document.querySelector(".btnSearch")
const list__city = document.querySelector(".list__city")
let data = {}

formCity.addEventListener("submit", (event) => {
    event.preventDefault()
    const city = document.querySelector(".inputCity").value
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ua&appid=97322412d46e9614fc951685c9beceff`
    
    fetchWeather(url)
})

async function fetchWeather(url){
    const res = await fetch(url);
    data = await res.json();
    console.log('data: ', data);
    
    startList();
}

function startList() {
    const cityList = data["list"];
    console.log('rivne: ', cityList);
    const dataCity1 = cityList[0];
    console.log('dataCity1: ', dataCity1["dt_txt"]);
    console.log('dataCity1: ', dataCity1);
    list__city.insertAdjacentHTML("beforeend", 
    `
    <li><span>Місто</span> ${data.city["name"]}</li>
    <li><span>Дата погоди: </span> ${dataCity1["dt_txt"]}</li>
    <li><span>Температура повітря : </span> ${dataCity1.main["temp"]} °C </li>
    `
    )
}





