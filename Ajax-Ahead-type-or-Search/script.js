//Model
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  const cities = [];

  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

  function findMatches(wordToMatch, cities){
    return cities.filter(cities => {
      const regex = new RegExp(wordToMatch, 'gi');
      return cities.city.match(regex) || cities.state.match(regex);
    });
  };

  function fun(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const search = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions ul');

//View
function displayMatches(){
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {

    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    const populationTotal = fun(place.population);

    return `
    <li>
      <span>${cityName}, ${stateName}</span>
      <span>${populationTotal}</span>
    </li>
    `
  }).join('');
  suggestions.innerHTML = html;
};

//Control
search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);
