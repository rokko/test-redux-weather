import React from 'react'
import Header from '../components/Header'
import BarWeather from '../components/BarWeather'
import { useSelector } from 'react-redux'
import { selectCities } from '../store/store'
import DropDown from '../components/DropDown'
import {removeCity, updateCity} from '../store/slice/weatherSlicer'

const Homepage : React.FC = () => {
    let key : number = 0
    const weather = useSelector(selectCities)
    return(
        <>
        <Header/>
        <DropDown />
        <div className="container">
        {weather.map(city =>{
            key++
            return(
                
                <BarWeather 
                key={key}
                name={city.name}
                weather={city.weather}
                icon={city.icon}
                removeCity= {removeCity}
                updateCity={updateCity}
                 />
                
            )})}
            </div>
        </>
    )
}

export default Homepage