document.addEventListener('DOMContentLoaded', () => {
    fetchPhones();
});

async function fetchPhones() {
    showSpinner();
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
            <img src="${phone.image}" alt="${phone.name}" style="cursor:pointer;">
            <h2>${phone.name}</h2>
            <p>Price: $${phone.price}</p>
            <p><b>Specs</b>: </br>${phone.specs.display}, ${phone.specs.camera}, ${phone.specs.battery}, ${phone.specs.gaming}</p>
        `;
        phoneDiv.addEventListener('click', () => openModal(phone));
        container.appendChild(phoneDiv);
    });
}

function openModal(phone) {
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <img src="${phone.image}" alt="${phone.name}" style="max-width:100%; border-radius:10px; margin-bottom:10px;">
        <h2>${phone.name}</h2>
        <p><b>Price:</b> $${phone.price}</p>
        <p><b>Specs:</b><br>Display: ${phone.specs.display}<br>Camera: ${phone.specs.camera}<br>Battery: ${phone.specs.battery}<br>Gaming: ${phone.specs.gaming}</p>
    `;
    modal.style.display = 'flex';
}

document.getElementById('close-modal').onclick = function() {
    document.getElementById('product-modal').style.display = 'none';
};
window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Loading spinner
function showSpinner() {
    const container = document.getElementById('phone-container');
    container.innerHTML = '<div class="spinner" style="margin:40px auto; border:8px solid #f3f3f3; border-top:8px solid #3498db; border-radius:50%; width:60px; height:60px; animation:spin 1s linear infinite;"></div>';
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
