import './css/styles.css';

import debounce from 'lodash.debounce';

import Notiflix from 'notiflix';

import './fetch';

import './renderMarkUp';
const DEBOUNCE_DELAY = 300;

let refs = {
  input: document.querySelector('#search-box'),
  country: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(inputCountry, DEBOUNCE_DELAY));

function inputCountry(e) {
  if (e.target.value.length > 1 && e.target.value.length <= 10) {
  }
}
