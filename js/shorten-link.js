const buttonShorten = document.querySelector('.button-shorten');
let blockLinkContainer = document.querySelector('.block-link_container');

async function sendData() {

    let longLink = document.querySelector('.longLink').value;
    const newBlock = document.querySelector('.wrap-block-link_container');
    const shortenLink = document.querySelector('.shorten-link');

    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`);
    let startLink = document.querySelector('.start-link');
    const invalidAddress = document.querySelector('.longLink');
    const inputPrompt = document.querySelector('.input-prompt');

    if(!response.ok) {
        document.querySelector('.longLink').value = '';
        invalidAddress.classList.add('invalid-form');
        inputPrompt.style.opacity = 1;

    } else {
        let result = await response.json();
        const newBlockLinkContainer = document.querySelector('.wrap-block-link_container');
        const newBlockLink = newBlockLinkContainer.cloneNode(true);

        blockLinkContainer.appendChild(newBlockLink);

        invalidAddress.classList.remove('invalid-form');
        inputPrompt.style.opacity = 0;
        newBlock.style.display = 'block';

        startLink.textContent = longLink;
        shortenLink.textContent = result.result.short_link;
        document.querySelector('.longLink').value = '';

    }
}


buttonShorten.addEventListener('click', (e) => {
    e.preventDefault();
    //немного сократила, и плюс лучше сперва добавить а потом удалять, если что-то добавилось
    sendData();

    // Я НЕ ИСПОЛЬЗУЮ ЗДЕСЬ ПЕРЕМЕННУЮ ПОТОМУ ЧТО В НЕЙ ЛЕЖИТ ПРЕДЫДУЩЕЕ КОЛ-ВО ССЫЛОК
    if(document.querySelector('.wrap-block-link_container').children.length > 3) {
        blockLinkContainer.lastChild.remove();
    }

})
