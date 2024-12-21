const bookNowBtn = document.getElementById("bookNow");
const result = document.getElementById("result");
const searchButton = document.getElementById('btnSearch');
const clearButton = document.getElementById('btnClear');
//const countries = [];

function bookNowFunction(){
    console.log("We have clicked bookNow!!");
    resetResults();
}

function resetResults(){
    const input = document.getElementById("searchInput").value = "";
}

function searchDestination(){
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultView = document.getElementById('result');
    resultView.innerHTML = '';

    fetch('travel.json')
        .then((response) => response.json())
        .then(data => {
            // Work with JSON data here
            if(input !== ''){
               if(input.includes('beach' || 'beaches')){
                    const beaches = data.beaches;
                    beaches.forEach(beach => {
                        resultView.innerHTML +=
                        `<div class="resultView">
                        <div class="imageView"> 
                        <img src="${beach.imageUrl}" alt="${beach.name}">
                        </div>
                        <div class="textView">
                        <h2>${beach.name}</h2>
                        <p>${beach.description}</p><br>
                        <button id="visit">Visit</button>
                        </div>
                        </div>`;
                    });
                }
                else if(input.includes('temple' || 'temples')){
                    const temples = data.temples;
                    temples.forEach(temple => {
                        resultView.innerHTML += 
                        `<div class="resultView">
                        <div class="imageView">
                        <img src="${temple.imageUrl}" alt="${temple.name}">
                        </div>
                        <div class="textView">
                        <h2>${temple.name}</h2>
                        <p>${temple.description}</p><br>
                        <button id="visit">Visit</button>
                        </div>
                        </div>`;
                    })
                }
                else if(input.includes('country' || 'countries')){
                    const countries = data.countries;
                    countries.forEach(country => {
                        country.cities.forEach(city => {
                            resultView.innerHTML += 
                            `<div class="resultView">
                            <div class="imageView">
                                <img src="${city.imageUrl}" alt="${city.name}">
                            </div>
                            <div class="textView">
                            <h2>${country.name}</h2>
                            <h4>${city.name}</h4>
                            <p>${city.description}</p><br>
                            <button id="visit">Visit</button>
                            </div>
                            </div>`;
        /*const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', 
        minute: 'numeric', second: 'numeric' };
        const newYorkTime = new Date().toLocaleTimeString('en-US', options);
        console.log("Current time in New York:", newYorkTime);*/
                        })
                    })
                }
                else if(input.includes('australia')){
                    const countryName = data.countries.find(item => item.name.toLowerCase() === input);
                    const options = { timeZone: 'Australia/Sydney', hour12: true, hour: 'numeric', 
                    minute: 'numeric', second: 'numeric' };
                    const ausTime = new Date().toLocaleTimeString('en-US', options);
                    countryName.cities.forEach(city => {
                        console.log("City: " + city.name);
                        resultView.innerHTML += 
                        `<div class="resultView">
                        <div class="imageView">
                        <img src="${city.imageUrl}" alt="${city.name}">
                        </div>
                        <div class="textView">
                        <h2>${countryName.name}</h2>
                        <h4>${city.name}</h4>
                        <p>${city.description}</p><br>
                        <h5>Current Time:${ausTime}</h5><br>
                        <button id="visit">Visit</button>
                        </div>
                        </div>`;
                    })
                }
                else if(input.includes('japan')){
                    const countryName = data.countries.find(item => item.name.toLowerCase() === input);
                    const options = { timeZone: 'Asia/Tokyo', hour12: true, hour: 'numeric', 
                    minute: 'numeric', second: 'numeric' };
                    const japTime = new Date().toLocaleTimeString('en-US', options);
                    countryName.cities.forEach(city => {
                        resultView.innerHTML += 
                        `<div class="resultView">
                        <div class="imageView">
                        <img src="${city.imageUrl}" alt="${city.name}">
                        </div>
                        <div class="textView">
                        <h2>${countryName.name}</h2>
                        <h4>${city.name}</h4>
                        <p>${city.description}</p><br>
                        <h5>Current Time:${japTime}</h5><br>
                        <button id="visit">Visit</button>
                        </div>
                        </div>`;
                    })
                }
                else if(input.includes('brazil')){
                    const countryName = data.countries.find(item => item.name.toLowerCase() === input);
                    const options = { timeZone: 'America/Rio_Branco'    , hour12: true, hour: 'numeric', 
                    minute: 'numeric', second: 'numeric' };
                    const brazilTime = new Date().toLocaleTimeString('en-US', options);
                    countryName.cities.forEach(city => {
                        console.log("City: " + city.name);
                        resultView.innerHTML += 
                        `<div class="resultView">
                        <div class="imageView">
                        <img src="${city.imageUrl}" alt="${city.name}">
                        </div>
                        <div class="textView">
                        <h2>${countryName.name}</h2>
                        <h4>${city.name}</h4>
                        <p>${city.description}</p><br>
                        <h5>Current Time:${brazilTime}</h5><br>
                        <button id="visit">Visit</button>
                        </div>
                        </div>`;
                    })
                }
                else {
                    resultView.innerHTML = `<div class="resultView">
                    <div class="textView">
                    <h2>No Destination(s) found based on your search.  Please try again!!</h2>`
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
            console.log("An error occurred while fetching data.");
            resultView.innerHTML = `<h1>An error occurred while fetching data.</h1>`;
        });
        event.preventDefault();
} 


bookNow.addEventListener('click', bookNowFunction);
clearButton.addEventListener('click', resetResults);
searchButton.addEventListener('click', searchDestination);

