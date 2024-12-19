const bookNowBtn = document.getElementById("bookNow");
const result = document.getElementById("result");
const searchButton = document.getElementById('btnSearch');
const clearButton = document.getElementById('btnClear');
const destinations = [];


function searchDestination(){
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultView = document.getElementById('result');
    resultView.innerHTML = '';

    fetch('travel.json')
        .then(response => response.json())
        .then(data => {
            // Work with JSON data here
            if(input !== ''){
                if(input.includes('beach')){
                    const beaches = data.beaches;
                    beaches.forEach(beach => {
                        resultView.innerHTML +=`
                        <div class="resultView">
                        <div class="imageView"> 
                        <img src="${beach.imageUrl}" alt="${beach.name}">
                        </div>
                        <div class="textView">
                        <h2>${beach.name}</h2>
                        <p>${beach.description}</p>
                        </div>
                        </div>`;
                        console.log("beachImage: " + beach.imageUrl);
                        console.log("beach Name: " + beach.name);
                        console.log("beach description: " + beach.description);
                    });
                }
            }
            
        })
        .catch(error => {
            console.error('Error:', error);
            console.log("An error occurred while fetching data.");
            //resultView.innerHTML = 'An error occurred while fetching data.';
        });
} 

searchButton.addEventListener('click', searchDestination);


