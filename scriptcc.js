
<html>
  <head>
    <title id="title">Weather-Storm</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="stylecurrentconditions.css" />
    <script src="config.js"></script>
    <script src="scriptcc.js"></script>
    <meta name="authors" content="Jesse Hasty">
    <meta name='viewport' content='width=device-width; content='width = 425; initial-scale=1.0; maximum-scale=1.0; user-scalable=yes; target-densitydpi=160dpi'>
    <meta name="apple-mobile-web-app-title" content="Weather-Storm">
<meta name='apple-mobile-web-app-capable' content='yes'>
<meta name='apple-touch-fullscreen' content='yes'>
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  </head>
    <body>
        <div class="fullpage" align="center">
        <div class="container">
            <div class="currentconditions">
                <div class="weatherinfo">
                  <div align="center">
                    <!-- The Time of the observation -->
                    <h3 class="time" id="time">Dec 31 1969 11:59 PM</h3>
                      <!-- Current Conditions Section -->
                    <div class="search-container">
                      <input type="text" class="inputcontainer" placeholder="Search for a City. Do :auto for your estimated location" id="searchInput">
                      <button id="searchButton" class="searchb" onclick="getSearch()">Search</button>
                      <ul class="list" id="citylist"></ul>
                      <a style="display: flex; margin-left: 100px; color:hsl(from color h s l)" href="citylist.html">Click me for a list of cities</a>
                      </div>
                <h1 class="city" id="cityname">The Location your searched for is invalid.</h1></div>
                <h1 class="temperature" id="temp">32°F</h3>
                  <div id="icon">
<img src="loading.svg"></img>
</div>
                <h3 class="weathercond" style="color: black;" id="weather">Sunny</h3>
                <div class="cards-container" id="cardr1">
                <div class="card" id="windcard">
                  <div class="cardtitle" id="windtitle">Wind</div>
                  <div class="value" style="margin-top: 50px;" id="windvalue">0 mph</div>
                  <div class="valuet" style="margin-top: 25px;" id="feelslike"></div>
                </div>
                <div class="card" id="uvcard">
                  <div class="cardtitle" id="uvtitle">UV Index</div>
                  <div class="value" id="uvvalue">0</div>
                </div>
                <div class="card" id="humiditycard">
                  <div class="cardtitle" id="humtitle">Humidity</div>
                  <div class="value" id="humvalue">100%</div>
                </div>
              </div>
              <div class="cards-container" id="cardr2">
                <div class="card">
                  <div class="cardtitle" id="pressuretitle">Pressure</div>
                  <div class="value" id="pressurevalue">0 mph</div>
                </div>
                <div class="card">
                  <div class="cardtitle" id="dewtitle">Dew Point</div>
                  <div class="value" id="dewvalue">0 mph</div>
                </div>
                <div class="card">
                  <div class="cardtitle" id="visbilitytitle">Visibility</div>
                  <div class="valuevis" style="margin-bottom: 50px;" id="visibilityvalue">15 mi
              
                </div>
                <div class="valuet" id="visibilitytext">Clear Skies</div>
              </div>
              </div>
              <div class="cards-container" id="cardr3">
                <div class="card">
                  <div class="cardtitle" id="rainrtitle">Rain Rate</div>
                  <div class="value" id="rainrvalue">0 in./hr</div>
                </div>
                <div class="card">
                  <div class="cardtitle" id="snowdtitle">Snow Depth</div>
                  <div class="value" id="snowdepthvalue">0 in</div>
                </div>
                <div class="card">
                  <div class="cardtitle" id="solartitle">Solar Radiation</div>
                  <div class="value" id="solarvalue">0 watts/m²</div>
                </div>
              </div>
              </div>
              <div id="alerts" class="alerts">No Alerts, Enjoy your day :)</div>
              <div id="radar">
              </div>
              <div class="daycontainer">
                <div class="daycard">
                  <!-- Day 1 -->
                  <div class="daycardname" id="dayname0">Day 1</div>
                  <div class="weathericon" id="wxicon0">
                    <img src="sunny.png"></img>
                  </div>
                  <div class="weathername" id="weather0">Sunny</div>
                  <div class="daycardtemp" id="temp0day">32</div>
                  <div class="daycardlow" id="templow0day">32</div>
                </div>
                                    <!-- Day 2 -->
            <div class="daycard">
              <div class="daycardname" id="dayname1">Day 2</div>
              <div class="weathericon" id="wxicon1">
                <img src="sunny.png"></img>
              </div>
              <div class="weathername" id="weather1">Sunny</div>
              <div class="daycardtemp" id="temp1day">32</div>
              <div class="daycardlow" id="templow1day">32</div>
            </div>
                                <!-- Day 3 -->
        <div class="daycard">
          <div class="daycardname" id="dayname2">Day 3</div>
          <div class="weathericon" id="wxicon2">
            <img src="sunny.png"></img>
          </div>
          <div class="weathername" id="weather2">Sunny</div>
          <div class="daycardtemp" id="temp2day">32</div>
          <div class="daycardlow" id="templow2day">32</div>
        </div>
                            <!-- Day 4 -->
          <div class="daycard">
            <div class="daycardname" id="dayname3">Day 4</div>
            <div class="weathericon" id="wxicon3">
              <img src="sunny.png"></img>
            </div>
            <div class="weathername" id="weather3">Sunny</div>
            <div class="daycardtemp" id="temp3day">32</div>                
            <div class="daycardlow" id="templow3day">32</div>
          </div>
                                        <!-- Day 5 -->
            <div class="daycard">
              <div class="daycardname" id="dayname4">Day 5</div>
              <div class="weathericon" id="wxicon4">
                <img src="sunny.png"></img>
              </div>
              <div class="weathername" id="weather4">Sunny</div>
              <div class="daycardtemp" id="temp4day">32</div>                  
              <div class="daycardlow" id="templow4day">32</div>
            </div>        
              <div class="daycard">
                   <!-- Day 5 -->
                <div class="daycardname" id="dayname5">Day 6</div>
                <div class="weathericon" id="wxicon5">
                  <img src="sunny.png"></img>
                </div>
                <div class="weathername" id="weather5">Sunny</div>
                <div class="daycardtemp" id="temp5day">32</div>
                <div class="daycardlow" id="templow5day">32</div>
              </div>
                                            <!-- Day 6 -->
                <div class="daycard">
                  <div class="daycardname" id="dayname6">Day 7</div>
                  <div class="weathericon" id="wxicon6">
                    <img src="sunny.png"></img>
                  </div>
                  <div class="weathername" id="weather6">Sunny</div>
                  <div class="daycardtemp" id="temp6day">32</div>
                  <div class="daycardlow" id="templow6day">32</div>
                </div>
    </div>             
    <div class="detailedinformationcontainer">
      <div class="informationintro" id="infointro0">Detailed Information for Today/Tonight:</div>
      <div class="deatiledinformation-today" id="temptoday">High Temperature: 32°F (0°C)</div>
      <div class="deatiledinformation-mintoday" id="tempmintoday">Low Temperature: 32°F (0°C)</div>
      <div class="deatiledinformation-detailed" id="fullforecast0">It will be Sunny Today (or Tonight) with a High of 32 and a Low of 32.</div>
      <div class="informationintro" id="infointro1">Detailed Information for Day 2:</div>
      <div class="deatiledinformation-today" id="temptoday1">High Temperature: 32°F (0°C)</div>
      <div class="deatiledinformation-mintoday" id="tempmintoday1">Low Temperature: 32°F (0°C)</div>
      <div class="deatiledinformation-detailed" id="fullforecast1">It will be Sunny Today (or Tonight) with a High of 32 and a Low of 32.</div>
    </div>
      </div>
      <div class="bottomnavbar" id="bottombar">
        <a href="hourly.html"  class="linkbutton">Hourly Forecast</a>
        <a href="widgetholder.html"  class="linkbutton" style="margin-left: 310px">Widgets</a>
        <a href="hourly.html" class="linkbutton" style="margin-left: 310px">Day Planner</a>
      </div>   
            </div>      
        </div>
      </div>
    </div>
    </body>
    </html>
  
    <script>
    getDate() 
async function getDate() {
  const d = new Date();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var dayofweek = d.getDay();
  var year  = d.getFullYear()
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var newmonth = months[d.getDate()];
var currentweekday = weekdays[d.getDay()];
console.log(currentweekday);

var day1 = weekdays[d.getDay()];
var day2 = weekdays[d.getDay() + 1];
var day3 = weekdays[d.getDay() + 2];
var day4 = weekdays[d.getDay() + 3];
var day5 = weekdays[d.getDay() + 4];
var day6 = weekdays[d.getDay() + 5];
var day7 = weekdays[d.getDay() + 6];

console.log(day3)
if (minute <10) {
  var minute = `0${minute}`;
}
document.getElementById('time').innerHTML = `${month}/${day}/${year} ${hour}:${minute}`;
// Day Names
document.getElementById('dayname0').innerHTML = `${day1}`;
document.getElementById('dayname1').innerHTML = `${day2}`;
document.getElementById('dayname2').innerHTML = `${day3}`;
document.getElementById('dayname3').innerHTML = `${day4}`;
document.getElementById('dayname4').innerHTML = `${day5}`;
document.getElementById('dayname5').innerHTML = `${day6}`;
document.getElementById('dayname6').innerHTML = `${day7}`;
// Forecast Intros
document.getElementById('infointro0').innerHTML = `Detailed Information for ${day1}`;
document.getElementById('infointro1').innerHTML = `Detailed Information for ${day2}`



}
getDate();
async function ChangeWidth() {
   var dimension = screen.width
console.log(dimension)
const row1 = document.getElementById('cardr2')
const row2 = document.getElementById('cardr3')
const nav = document.getElementById('bottombar')
    if (dimension <=425) {
     row1.remove()
     row2.remove()
     nav.remove()
    }
}
ChangeWidth()
setInterval(getTime, 1000)
    </script>

