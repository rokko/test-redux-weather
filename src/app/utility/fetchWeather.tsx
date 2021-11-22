
import { OW_APIKEY, OW_BASEURL } from '../../data/config'

export const fetchWeatherFromName = async (name: string) => {
    const data = await fetch(OW_BASEURL + '/weather?q=' + name + '&appid=' + OW_APIKEY)
    const weatherCity= await   data.json()
    return { name: weatherCity.name, icon: weatherCity.weather[0].icon, weather: weatherCity.weather[0].description }
    
}

export const fetchWeatherFromID = async ( id : number) => {
    const data = await fetch(OW_BASEURL + '/weather?id=' + id + '&appid=' + OW_APIKEY)
    const weatherCity= await  data.json()
    return { name: weatherCity.name, icon: weatherCity.weather[0].icon, weather: weatherCity.weather[0].description }
    
    
}

