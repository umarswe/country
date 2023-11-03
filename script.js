'use strict';

const backBtn = document.querySelector('.back');
const btn = document.querySelector('.btn-country');
const inputCountry = document.querySelector('.input-country');
const formCountry = document.querySelector('.country__form');
const searchBtn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

searchBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if(inputCountry.value){
    getCountryData(inputCountry.value);

    formCountry.style.display = 'none';
  } else{
    alert(`You entered wrong country!!!`)
  }
})

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};



const getCountryData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/${country}`)
  .then(response => response.json())
  .then(data => {
    renderCountry(data[0]);
  })
  .catch(err => console.log(err))

};
getCountryData();