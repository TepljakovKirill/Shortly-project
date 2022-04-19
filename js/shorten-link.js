let buttonShorten = document.querySelector('.button-shorten');



buttonShorten.addEventListener('click', () => {
    let longLink = document.querySelector('.longLink').value;

    async function sendData() {
        let response = await fetch('https://api.shrtco.de/v2/', {
            method: 'POST',
            body: JSON.stringify(longLink)
          });

          if(!response.ok) {
              alert('да хер там');
          }

        let result = await response.text();
        alert(result.message);
    }

    sendData();


    
    // async function getData() {
    //     let response = await fetch('https://api.shrtco.de/v2/info?code=example');
    //     let link = await response.text();
    //     alert(link);
    // }

    // getData();
})
  