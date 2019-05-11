'use strict';

let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16',
        color: '#fff'
    }
};

//console.log(JSON.stringify(options));
console.log(JSON.parse(JSON.stringify(options)));

// Для того, чтобы отправить обьект на сервер его нужно преобразовать в JSON формат. Есть 2 метода:
// 1) JSON.stringify    

// Чтобы расщифровать формат JSON необходимо применить JSON.parse()


/////////////////////////////////

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    // ЗАпрос к серверу
    request.open('GET', 'current.json');
    // Настройка HTTP запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    //  Тело запроса
    request.send();

    // status = состояние сервера (404 и т.д.)
    // statusText = текстовое описание ответа от сервера
    // responseText = текст ответа от сервера / response
    // readyState = текущее состояние запроса


    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

});