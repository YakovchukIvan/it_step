"use strict";

//Вивести на екран числа у вказаному користувачем діапазоні,
//Які числа виводити, визначається третім параметром типу bool (true – парні, false – непарні).
//обрані числа мають підстрибувати

const numberFirst = document.querySelector("#number-first");
const numberSecond = document.getElementById("number-second");
const buttonSubmit = document.querySelector("button");
const checkbox = document.querySelector('[type="checkbox"]');
const container = document.querySelector(".container");

function clearField(fieldOne, fieldTwo) {
  fieldOne.value = "";
  fieldTwo.value = "";
}

buttonSubmit.addEventListener("click", () => {
  console.log("click btn");

  const first = +numberFirst.value;
  const second = Number(numberSecond.value);
  const bool = checkbox.checked;

  if (!first || !second) {
    alert("Введіть числові значення в обох полях");
  } else if (first >= second) {
    alert("Перше число повинне бути більшим");
  } else {
    showNumber(first, second, bool);
  }

    clearField(numberFirst, numberSecond);
});

function showNumber(firstNumber, secondNumber, bool) {
  // console.log("showNumber");
  // console.log(firstNumber, secondNumber, bool);
  
  for (let i = firstNumber; i <= secondNumber; i++) {
    const block = document.createElement("div");
    block.className = "item";
    container.appendChild(block);
    block.textContent = i;

    console.log(block.textContent);

    if(block.textContent % 2 == 0 && bool) {
      block.classList.add("bounce");
    }
  }
}