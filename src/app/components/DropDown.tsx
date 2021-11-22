import React, { useState } from 'react'
import listcities from '../../data/cities.json'
import { useDispatch } from 'react-redux'
import { addCity } from '../store/slice/weatherSlicer'
import { fetchWeatherFromID } from '../utility/fetchWeather'


const DropDown: React.FC = () => {
    const [isActive, setIsActive] = useState(false)
    const dispatch = useDispatch()
    let key: number = 0


    const takeWeather = async (id: number) => {
        const weather = await fetchWeatherFromID(id) 
        dispatch(addCity(weather))
        
    }



    return (
        <div className="dropdown">
            <div className="dropdown-button" onClick={(e) => setIsActive(!isActive)} >
                Add a City
                <img className='icon' src="https://img.icons8.com/pastel-glyph/64/000000/sorting-arrows--v1.png" alt="updown" />
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {listcities.map((city) => {
                        key++
                        return (
                            <div 
                                key={key}
                                onClick={e => {
                                setIsActive(false)
                                takeWeather(city._id)
                            }}
                                className="dropdown-item">
                                {city.name}
                            </div>

                        )
                    })}
                </div>
            )}
        </div>
    )



}

export default DropDown