import { weatherHelper } from './weatherHelper'

export const App = () => {

    const {city, dataWeather, background, onChangeCity, onSubmit} = weatherHelper()

    document.querySelector('body').classList = `${background}`

    return (
        <div className="container">
            <h1>Weather App</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={onChangeCity}></input>
                <button>Search</button>
            </form>
            {dataWeather && (
                dataWeather.cod == "404" ?
                <div>
                    <h2>Hubo un error</h2>
                </div>
                :
                <div>
                    <h2>{dataWeather.name}</h2>
                    <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`}></img>
                    <p>Weather: {dataWeather.weather[0].description}</p>
                    <p>Temperature: {parseInt(dataWeather.main.temp)}°C</p>
                    <p>Wind Speed: {dataWeather.wind.speed}km/h</p>
                    <p>Humidity: {dataWeather.main.humidity}</p>
                </div>
            )
            }

        </div>
    )
}
