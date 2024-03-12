
// Get Params

// Function for Parameters
console.log(`URL:`, window.location);

const values = window.location.search;
console.log(values);


const parameters = new URLSearchParams(values);
const newcity = parameters.get('city');

console.log(newcity);

var city = newcity;
// Start of GetWx function
getWx();
const api_url = `https://api.aerisapi.com/conditions/${city}?format=json&plimit=1&filter=1min&client_id=${client_id}&client_secret=${client_secret}`;
async function getWx() {
   const responsee = await fetch(api_url);
   const data = await responsee.json();
   const { response } = data;
   console.log(data);
   var lat = `${response[0].loc.lat}`;
   var lon = `${response[0].loc.long}`;
   let cordinates = {
      "lat": `${lat}`,
      "lon": `${lon}`
   }
   console.log(cordinates)
   document.getElementById('cityname').innerHTML = `<div class="city">Weather for ${response[0].place.name}, ${response[0].place.state}, ${response[0].place.country}</div>`;
   document.getElementById('temp').innerHTML = `${response[0].periods[0].tempF}°F (${response[0].periods[0].tempC}°C)`;
   document.getElementById('title').innerHTML = `WxStorm - Weather for ${response[0].place.name}, ${response[0].place.state}`
   document.getElementById('icon').innerHTML = `<img src="${response[0].periods[0].icon}" style="width: 10%; padding-left: 590px; display: flex;"></img>`;
   document.getElementById('weather').innerHTML = `${response[0].periods[0].weather}`
   document.getElementById('windvalue').innerHTML = ` ${response[0].periods[0].windDir} at ${response[0].periods[0].windSpeedMPH} mph`;
   document.getElementById('feelslike').innerHTML = `Feels Like ${response[0].periods[0].feelslikeF}°F (${response[0].periods[0].feelslikeC}°C)`
   document.getElementById('uvvalue').innerHTML = `${response[0].periods[0].uvi}`;
   document.getElementById('humvalue').innerHTML = `${response[0].periods[0].humidity}%`;
   document.getElementById('pressurevalue').innerHTML = `${response[0].periods[0].pressureIN} inHg`;
   document.getElementById('dewvalue').innerHTML = `${response[0].periods[0].dewpointF}°F`;
   document.getElementById('visibilityvalue').innerHTML = `${response[0].periods[0].visibilityMI} mi`;
   document.getElementById('snowdepthvalue').innerHTML = `${response[0].periods[0].snowDepthIN} in.`;
   document.getElementById('rainrvalue').innerHTML = `${response[0].periods[0].precipRateIN}in./hr`;
   document.getElementById('solarvalue').innerHTML = `${response[0].periods[0].solradWM2} watts/m²`;
   document.getElementById("windmetric").innerHTML = `${response[0].periods[0].windSpeedKPH} km/h`;



   // Function to get the UV Value
   if (response[0].periods[0].uvi <= 1) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - Very Low`
   } if (response[0].periods[0].uvi >= 1) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - Low`
   } if (response[0].periods[0].uvi >= 3) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - Medium`
   } if (response[0].periods[0].uvi >= 6) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - High`
   } if (response[0].periods[0].uvi >= 8) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - Very High`
   } if (response[0].periods[0].uvi > 11) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - Extreme`
   }
   // Function to get the visibility
   if (visibilityvalue = response[0].periods[0].visibilityMI >= 15) {
      visibilitytext.innerHTML = `Clear Skies`;
   } if (visibilityvalue = response[0].periods[0].visibilityMI <= 10) {
      visibilitytext.innerHTML = `Nearly Clear Skies`
   } if (visibilityvalue = response[0].periods[0].visibilityMI <= 7.5) {
      visibilitytext.innerHTML = `Near Clear Skies with patchy haze`
   } if (visibilityvalue = response[0].periods[0].visibilityMI <= 3.5) {
      visibilitytext.innerHTML = `Patchy Fog or Haze`
   } if (visibilityvalue = response[0].periods[0].visibilityMI <= 1.5) {
      visibilitytext.innerHTML = `Blowing Snow, Blowing Dust, Fog, Snowfall, or Haze`
   } if (visibilityvalue = response[0].periods[0].visibilityMI <= 0.875) {
      visibilitytext.innerHTML = `Fog or Haze`
   } if (visibilityvalue = response[0].periods[0].visibilityMI <= 0.5) {
      visibilitytext.innerHTML = `Very Dense Fog or Haze`
   } if (visibilityvalue = response[0].periods[0].visibilityMI <= 0.25) {
      visibilitytext.innerHTML = `Extremely Dense Fog/Haze`
   }
}
getWx();

// Get The Weather Forecast based off of IP
getForecast();
async function getForecast() {
   const forecast_url = `https://api.aerisapi.com/forecasts/${city}?limit=7&client_id=${client_id}&client_secret=${client_secret}`;
   const responsee = await fetch(forecast_url);
   const data = await responsee.json();
   const { response } = data;
   console.log(data);

   // Day 1
   document.getElementById('temp0day').textContent = response[0].periods[0].maxTempF;
   document.getElementById('templow0day').textContent = response[0].periods[0].minTempF;
   document.getElementById('wxicon0').innerHTML = `<img src="${response[0].periods[0].icon}"></img>`;
   document.getElementById('weather0').textContent = response[0].periods[0].weatherPrimary;
   document.getElementById('cloudcover0').innerHTML = `${response[0].periods[0].sky}% Cloud Cover`
   // Day 2
   document.getElementById('temp1day').textContent = response[0].periods[1].maxTempF;
   document.getElementById('templow1day').textContent = response[0].periods[1].minTempF;
   document.getElementById('wxicon1').innerHTML = `<img src="${response[0].periods[1].icon}"></img>`;
   document.getElementById('weather1').textContent = response[0].periods[1].weatherPrimary;
   document.getElementById('cloudcover1').innerHTML = `${response[0].periods[1].sky}% Cloud Cover`
   // Day 3
   document.getElementById('temp2day').textContent = response[0].periods[2].maxTempF;
   document.getElementById('templow2day').textContent = response[0].periods[2].minTempF;
   document.getElementById('wxicon2').innerHTML = `<img src="${response[0].periods[2].icon}"></img>`;
   document.getElementById('weather2').textContent = response[0].periods[2].weatherPrimary;
   document.getElementById('cloudcover2').innerHTML = `${response[0].periods[2].sky}% Cloud Cover`
   // Day 4
   document.getElementById('temp3day').textContent = response[0].periods[3].maxTempF;
   document.getElementById('templow3day').textContent = response[0].periods[3].minTempF;
   document.getElementById('wxicon3').innerHTML = `<img src="${response[0].periods[3].icon}"></img>`;
   document.getElementById('weather3').textContent = response[0].periods[3].weatherPrimary;
   document.getElementById('cloudcover3').innerHTML = `${response[0].periods[3].sky}% Cloud Cover`
   // Day 5
   document.getElementById('temp4day').textContent = response[0].periods[4].maxTempF;
   document.getElementById('templow4day').textContent = response[0].periods[4].minTempF;
   document.getElementById('wxicon4').innerHTML = `<img src="${response[0].periods[4].icon}"></img>`;
   document.getElementById('weather4').textContent = response[0].periods[4].weatherPrimary;
   document.getElementById('cloudcover4').innerHTML = `${response[0].periods[4].sky}% Cloud Cover`
   // Day 6
   document.getElementById('temp5day').textContent = response[0].periods[5].maxTempF;
   document.getElementById('templow5day').textContent = response[0].periods[5].minTempF;
   document.getElementById('wxicon5').innerHTML = `<img src="${response[0].periods[5].icon}"></img>`;
   document.getElementById('weather5').textContent = response[0].periods[5].weatherPrimary;
   document.getElementById('cloudcover5').innerHTML = `${response[0].periods[5].sky}% Cloud Cover`
   // Day 7
   document.getElementById('temp6day').textContent = response[0].periods[6].maxTempF;
   document.getElementById('templow6day').textContent = response[0].periods[1].minTempF;
   document.getElementById('wxicon6').innerHTML = `<img src="${response[0].periods[6].icon}"></img>`;
   document.getElementById('weather6').textContent = response[0].periods[6].weatherPrimary;
   document.getElementById('cloudcover6').innerHTML = `${response[0].periods[6].sky}% Cloud Cover`


   // Extra information for ice, rain, snow, or sleet accumulation.
   if (response[0].periods[0].iceaccumIN !== 0) {
      var accumulation0 = `Ice Accumulation around ${response[0].periods[0].iceaccumIN} in.`
      var chanceof = `Chance of Precipiation ${100 - response[0].periods[0].sky}.`
   } if (response[0].periods[1].iceaccumIN !== 0) {
      var accumulation1 = `Ice Accumulation around ${response[0].periods[1].iceaccumIN} in.`
      var chanceof1 = `Chance of Precipiation ${100 - response[0].periods[0].sky}.`
   } if (response[0].periods[0].precipIN !== 0) {
      var accumulation0 = `Rain Accumulation around ${response[0].periods[0].precipIN} in.`
      var chanceof = `Chance of Rain ${100 - response[0].periods[0].sky}.`
   } if (response[0].periods[1].precipIN !== 0) {
      var accumulation1 = `Rain Accumulation around ${response[0].periods[1].precipIN} in.`
      var chanceof1 = `Chance of Precipiation ${100 - response[0].periods[1].sky}.`
   } if (response[0].periods[0].snowIN !== 0) {
      accumulation0 = `Snow Accumulation around ${response[0].periods[0].snowIN} in.`
      var chanceof = `Chance of Snow ${100 - response[0].periods[0].sky}.`
   } if (response[0].periods[1].snowIN !== 0) {
      var accumulation1 = `Snow Accumulation around ${response[0].periods[1].snowIN} in.`
      var chanceof1 = `Chance of Snow ${100 - response[0].periods[1].sky}.`
   } if (accumulation0 = "undenfined") {
      var accumulation0 = ""
      var chanceof = ""
   } if (accumulation1 = "undenfined") {
      var accumulation1 = ""
      var chanceof1 = ""
   }
   console.log(chanceof)
   // Detailed Information Container 
   // Day 1 (Today/Tonight)
   document.getElementById('temptoday').innerHTML = `High Temperature: ${response[0].periods[0].maxTempF}°F (${response[0].periods[0].maxTempC}°C) `;
   document.getElementById('tempmintoday').innerHTML = `Low Temperature: ${response[0].periods[0].minTempF}°F (${response[0].periods[0].minTempC}°C) `;
   document.getElementById('fullforecast0').innerHTML = `${response[0].periods[0].weather}, with a high of ${response[0].periods[0].maxTempF} and a low of ${response[0].periods[0].minTempF}. The Max UV will be ${response[0].periods[0].uvi}. Winds to the ${response[0].periods[0].windDir} from ${response[0].periods[0].windSpeedMinMPH} to ${response[0].periods[0].windGust80mMPH} mph with peak gusts around ${response[0].periods[0].windGustMPH} mph. ${chanceof}  ${accumulation0}`;
   // Day 2 (Tommorow)
   document.getElementById('temptoday1').innerHTML = `High Temperature: ${response[0].periods[1].maxTempF}°F (${response[0].periods[1].maxTempC}°C) `;
   document.getElementById('tempmintoday1').innerHTML = `Low Temperature: ${response[0].periods[1].minTempF}°F (${response[0].periods[1].minTempC}°C) `
   document.getElementById('fullforecast1').innerHTML = `${response[0].periods[1].weather}, with a high of ${response[0].periods[1].maxTempF} and a low of ${response[0].periods[1].minTempF}. The Max UV will be ${response[0].periods[1].uvi}. Winds to the ${response[0].periods[1].windDir} from ${response[0].periods[1].windSpeedMinMPH} to ${response[0].periods[1].windGust80mMPH} mph with peak gusts around ${response[0].periods[1].windGustMPH} mph. ${chanceof1} ${accumulation1}`
   // Day 3 (Some day after tommorow).
   document.getElementById('temptoday2').innerHTML = `High Temperature: ${response[0].periods[2].maxTempF}°F (${response[0].periods[2].maxTempC}°C) `;
   document.getElementById('tempmintoday2').innerHTML = `Low Temperature: ${response[0].periods[2].minTempF}°F (${response[0].periods[2].minTempC}°C) `
   document.getElementById('fullforecast2').innerHTML = `${response[0].periods[2].weather}, with a high of ${response[0].periods[2].maxTempF} and a low of ${response[0].periods[1].minTempF}. The Max UV will be ${response[0].periods[1].uvi}. Winds to the ${response[0].periods[2].windDir} from ${response[0].periods[2].windSpeedMinMPH} to ${response[0].periods[2].windGust80mMPH} mph with peak gusts around ${response[0].periods[2].windGustMPH} mph.`
}
getForecast();
// This is the function to get the alerts.
getAlert();
const alert_url = `https://api.aerisapi.com/alerts/${city}?client_id=${client_id}&client_secret=${client_secret}`;
async function getAlert() {
   const responsee = await fetch(alert_url);
   const data = await responsee.json();
   const { response } = data;
   console.log(response)
   document.getElementById('alerts').innerHTML = `<div style="background-color: #${response[0].details.color};">Alert: ${response[0].details.name} in effect for ${response[0].place.name} ${response[0].place.state}.<a href="alertdetail.html?city=${city}">Click Here for more information on alerts</a></div>`
   setInterval(getAlert, 300000)

   if (response[1].details.name !== "undefined") {
      alerts.innerHTML = `<div style="background-color: #${response[0].details.color};">Alert: ${response[0].details.name} in effect for ${response[0].place.name} ${response[0].place.state}.<a href="alertdetail.html?city=${city}">Click Here for more information on alerts</a></div><div style="background-color: #${response[1].details.color};">Alert: ${response[1].details.name} in effect for ${response[0].place.name} ${response[0].place.state}.</div>`
   } else {
      alerts.innerHTML = `<div style="background-color: #${response[0].details.color};">Alert: ${response[0].details.name} in effect for ${response[0].place.name} ${response[0].place.state}.<a href="alertdetail.html?city=${city}">Click Here for more information on alerts</a></div>`
   }

}
getAlert();
function getSearch() {
   document.getElementById('searchButton')
   document.getElementById('searchInput');

   searchButton.addEventListener("click", function () {

      window.location = `./?city=${searchInput.value}`
      event.preventDefault();


   });
   searchInput.addEventListener("input", function () {
      window.location = `./?city=${searchInput.value}`
   })
}
getSearch();
