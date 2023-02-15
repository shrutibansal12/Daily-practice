'use strict';
//how we use classes for key handling
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const show = document.querySelectorAll('.show-modal');

console.log(show);
const openmodal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closemodal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i =0; i<show.length ;i++){
    console.log(show[i].textContent);
    show[i].addEventListener('click',openmodal()); //openmodal() --here is first class functions
}

close.addEventListener('click',closemodal());

document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === "Escape" && !modal.classList.contains('.hidden')){
                   closemodal();
    }
})