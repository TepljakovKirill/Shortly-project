let buttonShorten = document.querySelector('.button-shorten');



buttonShorten.addEventListener('click', () => {
    let longLink = document.querySelector('.longLink').value;


    const sendData = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        })

        if(!response.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
        }
        return await response.json();

    }

    sendData('https://api.shrtco.de/v2/', longLink);


     // const getData = async (url) => {
    //     const response = await fetch(url);

    //     if(!response.ok) {
    //         throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    //     }
    //     return await response.json();
    // }

    
})
  