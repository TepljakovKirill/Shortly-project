let shortenForm = document.querySelector('.shorten-form input');
let addLink = document.querySelector('.input-prompt');
let buttonShorten = document.querySelector('.button-shorten');

shortenForm.addEventListener('click', () => {
    if(addLink.focus) {
        addLink.style.display = 'block';
    }
})

buttonShorten.addEventListener('click', (event)=> {
    event.preventDefault();
    if(addLink.focus) {
        addLink.style.display = 'none';
    }
})



