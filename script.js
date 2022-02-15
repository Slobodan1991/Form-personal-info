const locationEl = document.getElementById('option');
const saveForm = document.getElementById('save');

getCountries();

async function getCountries() {
    const res = await fetch('https://restcountries.com/v2/all');
    const countries = await res.json();
    listOfCountry(countries);
};

function listOfCountry(countries) {
    countries.forEach(country => {
        
        const countryEl = document.createElement('option');

        countryEl.innerHTML = `
        <option value="${country.name}">${country.name}</option>
        `;

        locationEl.append(countryEl)
    });
};




