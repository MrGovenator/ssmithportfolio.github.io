let weather = {
    //api + api fetch information
    apiKey: "7a4588b84f84991973d90393db493169",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    //HTML update from search
    displayWeather: function (data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const floorTemp = Math.floor(temp);
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".temp").innerHTML = floorTemp + "°F";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " mp/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    //Collected user search location
    search: function () {
        this.fetchWeather(document.querySelector(".searchInput").value);
    }
};
//Submit user search
document.querySelector(".searchBtn").addEventListener("click", function () {
    weather.search();
})

//default location
weather.fetchWeather("Dallas");