// HTML Elements
var weatherCards = document.querySelector(".weather-cards");
var findLocation = document.getElementById("findLocation");
// Variables
// Functions

async function findWeather(city){
    var response = await fetch( 
        `https://api.weatherapi.com/v1/forecast.json?key=2e1e4464979a4f26ba963703241210&q=${city}&days=7`
    );
    var weatherData =await response.json();
    displayWeatherData(weatherData)
    console.log(weatherData);
    

}
findWeather ("cairo")

function displayWeatherData(data){
    var dataArray = data.forecast.forecastday
    console.log(dataArray);
    var weatherStatu=`<div class="container"><div class="row">`;
    for (var i =0 ; i< 3 ; i++){
        var date = new Date(dataArray[i].date);
        var weeklyDay = date.toLocaleString("en-uk" , {weekday: "long"});
        if ( i=== 0 ){
            weatherStatu += `
            <div class="item one col-md-4 ps-4">
                        <div class="header  w-100 d-flex justify-content-between pt-2 px-3">
                            <p>${weeklyDay}</p>
                            <p>${dataArray[i].date}</p>
                        </div>
                        <div class="content pt-5">
                            <p class="pt-4 ">${data.location.name}</p>
                            <div class="degree">
                                <div class="num text-white">
                                    ${data.current.temp_c} <span>°</span>C
                                </div>
                                <div class="sun-icon my-3">
                                    <img src="${dataArray[i].day.condition.icon}">
                                </div>
                                
                            </div>
                            <div class="custom text-primary ">${dataArray[i].day.condition.text}</div>
                            <div class="info my-3">
                                <span class="me-2">
                                  <img src="./gallery/icon-umberella.png" alt="">
                                  ${data.current.
                                    heatindex_c
                                    }
                                </span>
                                <span class="mx-2"><img src="./gallery/icon-wind.png" alt="">${data.current.wind_kph}  km/h</span>
                                <span class="mx-2"><img src="./gallery/icon-compass.png" alt="">${data.current.wind_dir}</span>
                            </div>
                            
                        
                        </div>
                    </div>


            `
            ;
        }
        else if(i ===1 ){
            weatherStatu += `
            
             <div class="item two col-md-4  text-center">
                      <div class="header py-1">
                        <p>${weeklyDay}</p>
                      </div>
                      <div class="content ">
                        <img src="${dataArray[i].day.condition.icon}">
                        <p class="my-3 h3 fw-bold text-white">${dataArray[i].day.maxtemp_c}℃</p>
                        <span>${dataArray[i].day.mintemp_c}
                        </span>
                        <p class="text-primary my-2">${dataArray[i].day.condition.text}</p>
                      </div>
                      
                    </div>
            `
        }
        else if (i===2){
            weatherStatu += `

                                <div class="item three col-md-4  text-center">
                      <div class="header py-1">
                        <p>${weeklyDay}</p>
                      </div>
                      <div class="content ">
                        <img src="${dataArray[i].day.condition.icon}">
                        <p class="my-3 h3 fw-bold text-white">${dataArray[i].day.maxtemp_c}℃</p>
                        <span>${dataArray[i].day.mintemp_c}°
                        </span>
                        <p class="text-primary my-2">${dataArray[i].day.condition.text}</p>
                      </div>
                      
                    </div>
            `
        }


    }
    weatherCards.innerHTML = weatherStatu;
    
}

// Events

findLocation.addEventListener("input" , function(){
    var city = findLocation.value;
    findWeather(city);
})
