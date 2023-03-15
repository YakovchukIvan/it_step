import page from "page";
import javascriptLogo from './javascript.svg'


const $app = document.querySelector("#app")
const title = document.querySelector("title")
const APP_NAME = "APP"

const index = () => {
    $app.innerHTML = `<h1>INDEX</h1>`
    title.textContent = `${APP_NAME} | ${index.name.toUpperCase()}`
}


const user = () => {
    $app.innerHTML = `<h1>USER</h1>`
    title.textContent = `${APP_NAME} | ${user.name.toUpperCase()}`
}


const counter = () => {
    $app.innerHTML = `<h1>COUNTER</h1>`
    title.textContent = `${APP_NAME} | ${counter.name.toUpperCase()}`
    
    function setupCounter(element) {
    let counter = 0
    const setCounter = (count) => {
        counter = count
        element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
    }

    document.querySelector('#app').innerHTML = `
    <div>
        <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
        <h1>Hello Vite!</h1>
        <div class="card">
        <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
        Click on the Vite logo to learn more
        </p>
    </div>
    `

    setupCounter(document.querySelector('#counter'))

}




page('/', index)
page('/user', user)
page('/counter', counter)
// page('*', notfound)
page()
