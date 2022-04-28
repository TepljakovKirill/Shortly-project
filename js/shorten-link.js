const buttonShorten = document.querySelector('.button-shorten');
let blockLinkContainer = document.querySelector('.block-link_container');
let arrayChildren = [];


buttonShorten.addEventListener('click', () => {

    function createLink() {
        let children = document.querySelector('.block-link_container').children.length;
        arrayChildren.push(children);
        
        const newBlockLinkContainer = document.querySelector('.wrap-block-link_container');
        const newBlockLink = newBlockLinkContainer.cloneNode(true);

        blockLinkContainer.appendChild(newBlockLink);
        
        let longLink = document.querySelector('.longLink').value;
        const newBlock = document.querySelector('.wrap-block-link_container');
        const shortenLink = document.querySelector('.shorten-link');

        async function sendData() {
            let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`);
            let startLink = document.querySelector('.start-link');

            if(!response.ok) {
                alert('Не корректная ссылка');
            }

            let result = await response.json();

            if(result) {
                newBlock.style.display = 'block';
                startLink.textContent = longLink;
                shortenLink.textContent = result.result.short_link;
                document.querySelector('.longLink').value = '';
            } 
        }
        sendData();
    }

    function deleteLastLink() {
        blockLinkContainer.removeChild(blockLinkContainer.lastChild);
        arrayChildren.shift();
    }

    if(arrayChildren.length < 3) {
        createLink();
    } else {
        deleteLastLink();
        createLink();
    }
})
  