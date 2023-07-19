// import { characters, greet } from "./characters.mjs";

// for (const c of characters) {
//     greet(c)
// }



// import * as char from './characters.mjs'

// for (const c of char.characters) {
//     char.greet(c)
// }



// import log, { characters, greet } from './characters.mjs'
// log()
// for (const c of characters) {
//     greet(c)
// }

async function main () {
    try {
        const { characters, greet } = await import('./characters.mjs')
        for (const c of characters)
        greet(c)
    } catch (error) {
        console.log('error');
    }
}
main()