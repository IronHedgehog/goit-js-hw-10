export default function aboutCountries(countries) {
  const markUp = countries
    .map(country => {
      return `
    <p> <img src = "${country.flags.svg}" alt = "${country.name.official}" width = "30"><span>${
        country.name.official
      }</span> </p>
    <p>Capital -> ${country.capital}</p>
    <p>Population -> ${country.population}</p>
    <p>Languages -> ${Object.values(country.languages)}</p>
    `;
    })
    .join('');
  return markUp;
}
