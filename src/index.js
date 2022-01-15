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

/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

// import '../css/common.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// import API from './api-service';
// import getRefs from './get-refs';

// const refs = getRefs();

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

// const form = e.currentTarget;
// const searchQuery = form.elements.query.value;
// console.log(searchQuery);

//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
// }

// // =========================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);
