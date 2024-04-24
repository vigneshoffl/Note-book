let popupoverlay = document.querySelector('.overlay')
let popupBox = document.querySelector('.popup-box')
let addPopupBtn = document.getElementById('add-popup-btn');

addPopupBtn.addEventListener('click',function(){
    popupoverlay.style.display = 'block'
    popupBox.style.display = 'block'
    addPopupBtn.style.display = 'none'
})

//selecting cancel button

let cancelpopup = document.getElementById('cancel-popup')

cancelpopup.addEventListener('click',function(event){
    event.preventDefault()
})

// select container, add-book, book-title-input,book-author-input,book-description-input

let container = document.querySelector('.container');
let booktitleInput = document.getElementById('book-title-input');
let bookauthorInput = document.getElementById('book-author-input');
let bookdescriptionInput = document.getElementById('book-description-input');
let addbook = document.getElementById('add-book');

addbook.addEventListener('click',function(event){
    event.preventDefault()
    let div = document.createElement('div');
    div.setAttribute('class','book-details');
    div.innerHTML = ` <h4>${booktitleInput.value}</h4>
    <h5>${bookauthorInput.value}</h5>
    <p>${bookdescriptionInput.value}</p>`
    container.appendChild(div);
    popupoverlay.style.display = 'none'
    popupBox.style.display = 'none'
    addPopupBtn.style.display = 'block'
})