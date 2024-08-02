document.addEventListener('DOMContentLoaded', () => {
    fetchPhones();
});

async function fetchPhones() {
    const response = await fetch('http://localhost:5000/phones');
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
            <a href="${phone.specs}" target="_blank">
            <img src="${phone.image}" alt="${phone.name}"></a>
            <h2>${phone.name}</h2>
            <p>Price: $${phone.price}</p>
           
        `;
        container.appendChild(phoneDiv);
    });
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
