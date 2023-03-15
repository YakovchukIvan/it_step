"use strict";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const userForm = document.querySelector('#user-form')
const contentBlock = document.querySelector('#content-block')

// const formField = userForm.elements //отримаємо елементи форми
// const formField2 = userForm.children //отримаємо всі елементи
// console.log("-> formField", formField);
// console.log("-> formField", formField.email);
// console.log("-> formField", formField['email']);


function getData(){
    const data = localStorage.getItem('users')
    return data ? JSON.parse(data) : []
}

function saveData(data){
    localStorage.setItem('users', JSON.stringify(data))
}

function updateData(data){
    saveData(data)
    render(contentBlock, users)
}


let users = getData()
render(contentBlock, users)
console.log("-> users", users);


userForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const formData = new FormData(userForm)
    const name = formData.get("name")
    const email = formData.get('email')
    const password = formData.get('password')
    const id = uuidv4()
    const createAt = moment().format('LLL');

    const data ={
        id,
        name,
        email,
        password,
        createAt,
    }
    users.push(data)
    saveData(users)
    render(contentBlock, users)
})

// contentBlock
function render(element, data){
    element.innerHTML = data.map(({id ,name, email, createAt}) => {
        return `
        <div class="user-item">
            <img src="./icons/x-circle.svg" alt="close" class="img-close" data-id="${id}">
            <p>${id}</p>
            <p>${name}</p>
            <p>${email}</p>
            <p>${createAt}</p>
        </div>
        `
    }).join(' ')
    // data-*
    // Синтаксис простий - будь-який атрибут, ім'я якого починається з data-, є data-* атрибутом. ' +
    // 'Припустимо, у нас є стаття і ми хочемо зберегти додаткову ' +
    // 'інформацію без візуального подання. Для цього можна використовувати data-атрибути:
    const userItems = document.querySelectorAll('.user-item')
    userItems.forEach(item => {
        item.addEventListener('click', (event) => {
                // event.currentTarget.style.backgroundColor = '#ccc'
            if(event.target.classList.contains('img-close')){
                const id = event.target.dataset.id
                users = users.filter(item => item.id !== id)
                updateData(users)
                render(contentBlock, users)
                event.currentTarget.remove()
            }
        })
    })
    // console.log(userItems);
}