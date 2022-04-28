const buttonCopy = document.querySelectorAll('.button-copy');
const shortenLink = document.querySelector('.shorten-link');

document.addEventListener('click', (e) => {
    const target = e.target;

    buttonCopy.forEach((button) => {
        if(button === target) {
            navigator.clipboard.writeText(shortenLink.innerHTML)
        }
    })
})