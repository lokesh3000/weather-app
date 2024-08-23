//Variable for Data which is fetched
let data;
//variables to store the elements
const inputbox=document.getElementById("inputbox");
const CountryName=document.getElementById("CountryName");
const StateName=document.getElementById("StateName");
const CityName=document.getElementById("CityName");
const Humidity=document.getElementById("Humidity");
const WindSpeed=document.getElementById("WindSpeed");
const Temperature=document.getElementById("Temperature");
const logo=document.getElementById("logo");
const weatherStatus=document.getElementById("weatherStatus")

const getData = async (event) =>{
    event.preventDefault();//prevents the default behaviour of the form which is to submit the data
    if(!inputbox.value){//To prevent hit from consuming and to prevent empty values
        alert("Please enter the city name ");
        return;
    }

const city=inputbox.value;
//Fetch Data
const fetchdata =await fetch(`https://api.weatherapi.com/v1/current.json?key=9461ea122ed84a5ea7572628241608&q=${city}`);
const orgData=await fetchdata.json();
data=orgData;

//displaying the data
CountryName.innerHTML = data.location.country;
StateName.innerHTML = data.location.region;
CityName.innerHTML = data.location.name;
Humidity.innerHTML = data.current.humidity;
WindSpeed.innerHTML = data.current.wind_kph;
Temperature.innerHTML = data.current.temp_c;
logo.src = data.current.condition.icon;
weatherStatus.innerHTML = data.current.condition.text;

}
setTimeout(3000,const notif =()=>{
    alert("press any key or touch the screen ")}
           )
