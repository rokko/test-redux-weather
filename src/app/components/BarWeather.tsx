import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherFromName } from '../utility/fetchWeather'


const BarWeather = ({ name, icon, weather, removeCity, updateCity, }: any) => {
    const dispatch = useDispatch()
    const iconImage: string = "http://openweathermap.org/img/w/" + icon + ".png";


    const remove = () => {
        dispatch(removeCity(name))
    }

    const update = async () => {
        const newWeather = await fetchWeatherFromName(name)
        dispatch(updateCity(newWeather))
    }

    return (
        <div className='container'>
            <div className="bar-weather">
                <div className="space-div">{name}</div>
                <img src={iconImage} alt={name} />
                <div className="space-div">{weather}</div>
                <img onClick={() => remove()} className="icon" src="https://img.icons8.com/fluency-systems-regular/48/000000/x.png" alt="remove" />
                <img onClick={() => update()} className="icon" src="https://img.icons8.com/ios-glyphs/30/000000/refresh--v2.png" alt="update" />
            </div>
        </div>
    )
}

export default BarWeather