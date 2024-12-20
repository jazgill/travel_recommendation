const bookNowBtn = document.getElementById("bookNow");
const result = document.getElementById("result");
const searchButton = document.getElementById('btnSearch');
const clearButton = document.getElementById('btnClear');
const destinations = [];

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
                        <p>${beach.description}</p>
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
                        <p>${temple.description}</p>
                        </div>
                        </div>`
                    })
                }
                else if(input.includes('japan' || 'countries')){
                    const countries = data.countries;
                    countries.forEach(country => {
                        resultView.innerHTML +=
                        `<div class="resultView">
                        <div class="imageView">
                        <img src="${country.imageUrl}" alt="${country.name}">
                        </div>
                        <div class="textView">
                        <h2>${country.name}</h2>
                        <p>${country.description}</p>
                        </div>
                        </div>`
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

