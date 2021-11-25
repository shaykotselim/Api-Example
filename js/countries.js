const loadContries = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayContries(data))
}
loadContries()
const displayContries = contries => {

        // for(const country of contries){
        //     console.log(country);
        // // }
        const countryDiv = document.getElementById('contries');
        contries.forEach(country=> {
            const div = document.createElement('div');
                div.classList.add('country')
                div.innerHTML = `<h3>Country: ${country.name.common}</h3>
                        <p>Official: ${country.name.official}</p>
                        <button onclick="loadDetailsByName('${country.name.common}')">Details</button>
                `
            countryDiv.appendChild(div)
            
        });

}
const loadDetailsByName =name =>{
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
    hideSection.style.display = 'block'
}
   
const hideSection = document.getElementById('hide-section');
        hideSection.style.display='none'
    // document.getElementById('hidesection').addEventListener('click', function(){
    //    console.log('hidesection');
    // })

const displayCountryDetail = country =>{
    console.log(country);
        const countryDetail = document.getElementById('country-detail');
        countryDetail.innerHTML= `
        <img width="200px" src="${country.flag}">
        <h3>Name of Country: ${country.name}</h3> 
        <p> Capital: ${country.capital}</p>
        <p>Border:${country.borders}</p> 
        <p>Native-Name:${country.nativeName}</p> 
        <p>Population:${country.population}</p> 
        <p>Region:${country.region}</p> 
        <p>Subregion:${country.subregion}</p> 
        <p>Timezones:${country.timezones}</p> 
        `
}
