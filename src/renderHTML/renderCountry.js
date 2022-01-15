export default function createCountry(countries) {
  const markUp = countries
    .map(country => {
      return `
    <li>
    <p> 
    <img src = "${country.flags.svg}" alt = "${country.name.official}" width = "30">
    <span>${country.name.official}</span> 
    </p>
    </li>
    `;
    })
    .join('');
  return markUp;
}
