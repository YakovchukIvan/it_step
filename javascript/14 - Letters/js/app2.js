let input = document.querySelector(".userText");
let btn = document.querySelector(".btn");


btn.addEventListener("click", addLetters = () => {
    let letters = {};

    for (let i = 0; i < input.value.length; i++) {
        const letter = input.value[i]
        if (letters[letter]) {
            letters[letter]++;
        } else {
            letters[letter] = 1;
        }
    }

    let keySort = Object.keys(letters).sort(function(a, b) {return letters[b] - letters[a];})
    let ul = document.querySelector(".list");
    let input_length = input.value.length;

    for (let i = 0; i < keySort.length; i++) {
        let d = keySort[i]
        // num / numText * 100 = % відсоток числа
        let interest = letters[d] / input_length * 100;
        
        ul.insertAdjacentHTML("beforeend", 
        `<li>"${d}": ${letters[d]} - ${interest.toFixed(3)} %</li>`
        )
    }
})






