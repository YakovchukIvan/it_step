(function (){
    console.log("Self invoking function");
}) ();

(function(w,d){
    console.log(w);
    console.log(d);
}) (window, document);

// function (){
//     console.log("Self invoking function");
// } ();


const module = (function(){
    console.log("module");
}) ();

// console.log(module);






