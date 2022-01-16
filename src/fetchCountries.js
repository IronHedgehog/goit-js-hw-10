const BASE_URL = 'https://restcountries.com/v3.1';
const NeededFIELDS = '?fields=name,capital,population,flags,languages';
export default class NewClass {
  constructor() {
    this.value = '';
  }
  fetchCountries() {
    return fetch(`${BASE_URL}/name/${this.value}${NeededFIELDS}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(err => {
        console.log('err');
      });
  }

  get val() {
    return this.value;
  }

  set val(newVal) {
    this.value = newVal;
  }
}
