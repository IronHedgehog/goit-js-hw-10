import './css/styles.css';

import debounce from 'lodash.debounce';

import Notiflix from 'notiflix';

import createCountry from './renderHTML/renderCountry';
import aboutCountries from './renderHTML/renderAbouCountry';

import fetchCountries from './fetch';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  country: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(inputValue, DEBOUNCE_DELAY));

function inputValue(e) {
  const value = e.target.value.trim();
  if (value === '') {
    refs.country.innerHTML = '';
    refs.info.innerHTML = '';
    return;
  }
  fetchCountries(value)
    .then(response => {
      if (response.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        refs.country.innerHTML = '';
        refs.info.innerHTML = '';
        return;
      }
      if (response.length < 10 && response.length >= 2) {
        refs.country.innerHTML = createCountry(response);
        refs.info.innerHTML = '';
        return;
      }
      if (response.length === 1) {
        refs.info.innerHTML = aboutCountries(response);
        refs.country.innerHTML = '';
        return;
      }
    })
    .catch(err => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
