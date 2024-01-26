import { useState } from 'react'

export const weatherHelper = () => {

    const apiKey = "d4597972782feb48ea458af269e0a811"

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

    const [city, setCity] = useState('')

    const [dataWeather, setDataWeather] = useState(null)

    const [background, setBackground] = useState("")


    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        fetchData()
    }

    const fetchData = async () => {
        try {
            const res = await fetch(apiUrl + city + `&appid=${apiKey}`)
            const data = await res.json()
            setDataWeather(data)
            console.log(data)
            console.log(data.weather[0].main)
            if (data.weather[0].main == "Clear") {
                data.weather[0].icon.includes("d") ? setBackground('sun')
                    : setBackground('moon')
            }
            else if (data.weather[0].main == "Rain") {
                setBackground('rain')
            } else if (data.weather[0].main == "Drizzle") {
                setBackground('drizzle')
            }
            else if (data.weather[0].main == "Clouds") {
                setBackground('clouds')
            }
        } catch (error) {
            console.log('Ocurrio un error:' + error)
        }
    }



    return {
        dataWeather,
        city,
        background,
        onChangeCity,
        onSubmit
    }
}
