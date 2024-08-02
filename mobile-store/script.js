document.addEventListener('DOMContentLoaded', () => {
    fetchPhones();
});

async function fetchPhones() {
    const response = await fetch('http://localhost:4000/phones');
    const phones = await response.json();
    displayPhones(phones);
}

async function sortPhones(criteria) {
    let url;
    switch(criteria) {
        case 'best-camera':
            url = 'http://localhost:4000/phones/sort/best-camera';
            break;
        case 'best-display':
            url = 'http://localhost:4000/phones/sort/best-display';
            break;
        case 'best-value':
            url = 'http://localhost:4000/phones/sort/best-value';
            break;
        default:
            url = 'http://localhost:4000/phones';
    }
    const response = await fetch(url);
    const phones = await response.json();
    displayPhones(phones);
}

function displayPhones(phones) {
    const container = document.getElementById('phone-container');
    container.innerHTML = '';
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.className = `phone ${phone.category}`;
        phoneDiv.innerHTML = `
            <a href="${phone.price}" target="_blank">
            <img src="${phone.image}" alt="${phone.name}"></a>
            <h2>${phone.name}</h2>
            <p><b>Specs</b>: </br>${phone.specs.display},${phone.specs.camera}, ${phone.specs.battery}, ${phone.specs.gaming}</p>
         
        `;
        container.appendChild(phoneDiv);
    });
}

//Add event listeners for sorting buttons
const cameraButton = document.getElementById('sort-camera');
const displayButton = document.getElementById('sort-display');
const valueButton = document.getElementById('sort-value');

cameraButton.addEventListener('click', () => {
    sortPhones('best-camera');
});

displayButton.addEventListener('click', () => {
    sortPhones('best-display');
});

valueButton.addEventListener('click', () => {
    sortPhones('best-value');
});

// Function to display all phones
function showAllPhones() {
    fetchPhones();
}
