// Чисті функції - це функції, вихідні дані з яких отримані виключно з вхідних даних і не викликають ніяких побічних ефектів у додатку



// pure 
function multiplication(n) {
    return n ** 2;
}
// console.log(multiplication(4));
// console.log(multiplication(4));
// console.log(multiplication(2));

// impure
function showAlert() {
    alert("Hello");
}
// showAlert();

// impure
let count = 0;
function myCount(){
    return count++;
}
console.log(myCount());
console.log(myCount());
console.log(myCount());
console.log(myCount());
console.log(myCount());