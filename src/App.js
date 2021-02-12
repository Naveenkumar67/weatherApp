import logo from './logo.svg';
import './App.css';
import React from "react";
import CityInput from './Components/CityInput';
import CityWeather from './Components/CityWeather';

function App() {


  const [city,setCity] = React.useState("");
  const [cityWeather,setCityWeather] = React.useState("");

  const fetchCityWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f1fce7aebce2e632ed6314800f08f6b`)
              
        .then(response => response.json())
       
        .then( (data) => {
      
          console.log(data);
            setCityWeather(JSON.stringify(data))
        
        })
       
        .catch(error => this.setState({ error, isLoading: false }));
  }

  return (
    <>
      <CityInput city={city}  setCity={setCity} fetchCityWeather={fetchCityWeather} />

      <CityWeather cityWeather={cityWeather}  />

    </>
  );
}

export default App;
