const buttonShorten = document.querySelector('.button-shorten');
let blockLinkContainer = document.querySelector('.block-link_container');

let arrayChildren = [];

buttonShorten.addEventListener('click', (e) => {
    e.preventDefault();

    
    
    function createLink() {
        let longLink = document.querySelector('.longLink').value;
        const newBlock = document.querySelector('.wrap-block-link_container');
        const shortenLink = document.querySelector('.shorten-link');

        async function sendData() {
            let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`);
            let startLink = document.querySelector('.start-link');
            const invaledaddress = document.querySelector('.longLink');
            const inputPrompt = document.querySelector('.input-prompt');

            if(!response.ok) {
                alert('Не корректная ссылка');
                document.querySelector('.longLink').value = '';
                invaledaddress.classList.add('invaled-form');
                inputPrompt.style.opacity = 1;

            } else {
                let result = await response.json();
                
                const newBlockLinkContainer = document.querySelector('.wrap-block-link_container');
                const newBlockLink = newBlockLinkContainer.cloneNode(true);
                blockLinkContainer.appendChild(newBlockLink);

                invaledaddress.classList.remove('invaled-form');
                inputPrompt.style.opacity = 0;
                newBlock.style.display = 'block';
                startLink.textContent = longLink;
                shortenLink.textContent = result.result.short_link;
                document.querySelector('.longLink').value = '';

                let children = document.querySelector('.block-link_container').children.length;
                arrayChildren.push(children);
                
            }
        }
        sendData();
    }

    function deleteLastLink() {
            blockLinkContainer.removeChild(blockLinkContainer.lastChild);
            arrayChildren.shift();
        }

    console.log(arrayChildren.length);

    if(arrayChildren.length < 3) {
        createLink();
        
    } else {
        deleteLastLink();
        createLink();
    }

})
  