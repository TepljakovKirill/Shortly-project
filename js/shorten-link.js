let buttonShorten = document.querySelector('.button-shorten');



buttonShorten.addEventListener('click', () => {
    let longLink = document.querySelector('.longLink').value;

    async function sendData() {
        let response = await fetch('https://api.shrtco.de/v2/', {
            method: 'POST',
            body: JSON.stringify(longLink)
          });

        let result = await response.text();
        alert(result.message);
    }

    sendData();


    
    
})
  