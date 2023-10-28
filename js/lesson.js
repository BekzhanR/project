// phone checker
//
// const phoneInput = document.querySelector('#phone_input')
// const phoneButton = document.querySelector('#phone_button')
// const phoneResult = document.querySelector('#phone_result')
//
// const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
//
// phoneButton.addEventListener('click',()=> {
//
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.innerHTML = 'OK'
//         phoneResult.style.color = 'green'
//     } else {
//         phoneResult.innerHTML = 'NOT OK'
//         phoneResult.style.color = 'red'
//     }
// })

// card switcher

// const card = document.querySelector('.card')
// const btnPrev = document.querySelector('#btn-prev')
// const btnNext = document.querySelector('#btn-next')
// let id = 1
//
// btnNext.onclick = () => {
//     id++
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//         .then(response => response.json())
//         .then(data => {
//             card.innerHTML = `
//                 <p>${data.title}</p>
//                 <p style="color:${data.completed ? 'green': 'red'}">${data.completed}</p>
//                 <span>${data.id}</span>
//             `
//         })


const cards = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')


const card = document.getElementById('card');
let count = 1;

function loadCardData(cardNumber) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
        .then(response => response.json())
        .then(data => {
            cards.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
        });
}

loadCardData(count);

btnNext.onclick = () => {
    count++;
    if (count > 200) {
        count = 1;
    }
    loadCardData(count);
};

btnPrev.onclick = () => {
    count--;
    if (count < 1) {
        count = 200;
    }
    loadCardData(count);
};

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Произошла ошибка при запросе к серверу:', error);
    });