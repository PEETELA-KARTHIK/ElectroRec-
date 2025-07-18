document.addEventListener('DOMContentLoaded', () => {
    fetchPhones();
});

async function fetchPhones() {
    showSpinner();
    const response = await fetch('http://localhost:2000/phones');
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
        <p><b>Specs:</b> ${phone.specs}</p>
        <a href="${phone.specs}" target="_blank" style="color:#3498db;">View More</a>
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

function filterPhones(category) {
    const phones = document.querySelectorAll('.phone');
    phones.forEach(phone => {
        if (category === 'all') {
            phone.style.display = 'block';
        } else {
            if (phone.classList.contains(category)) {
                phone.style.display = 'block';
            } else {
                phone.style.display = 'none';
            }
        }
    });
}
