let buttonShorten = document.querySelector('.button-shorten');



buttonShorten.addEventListener('click', () => {
    const longLink = document.querySelector('.longLink').value;
    async function sendData() {
        let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`);

          if(!response.ok) {
              alert('да хер там');
          }

        let result = await response.json();
          // result - текст, у него нет свойства message
        //alert(result.message);
        alert(result.result.short_link);
    }

    sendData();



    // async function getData() {
    //     let response = await fetch('https://api.shrtco.de/v2/info?code=example');
    //     let link = await response.text();
    //     alert(link);
    // }

    // getData();
})
