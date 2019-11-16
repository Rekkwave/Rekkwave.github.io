const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(response => {
  response.json()
  .then(
    response => {
      const towns = response.towns;

      towns.forEach(
          (town) => {
              if (town.name.toLowerCase() === 'fish haven') {
                  // Fish Haven
                  document.querySelector('#fishHavenYearFounded')
                  .textContent = town.yearFounded; //add other elements

                  document.querySelector('#fishHavenImage')
                    .setAttribute('src', 'images/', town.photo);

              } else if (town.name.toLowerCase() === 'preston') {
                  // Preston
                  document.querySelector('#prestonYearFounded')
                  .textContent = town.yearFounded;
              } 
              else (town.name.toLowerCase() === 'soda springs') {
                  // Soda Springs
                  document.querySelector('#sodaSpringsYearFounded')
                    .textContent = town.yearFounded;
              }
          }
      );
    })
});