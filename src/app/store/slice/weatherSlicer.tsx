import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CityWeather {
  name: string,
  icon: string,
  weather: string,
}
interface CitySliceState {
  cities: CityWeather[]
}
let initialState: CitySliceState

const firstInit = localStorage.getItem('Initial')

if (!firstInit) {
  initialState = {
    cities: []
  }
} else {
  initialState = JSON.parse(firstInit)
}



const saveCurrentStore = (cities: CitySliceState): void => {
  localStorage.setItem('Initial', JSON.stringify(cities));
}


const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity(state, action: PayloadAction<CityWeather>) {
      state.cities = [
        ...state.cities,
        {
          name: action.payload.name,
          icon: action.payload.icon,
          weather: action.payload.weather,

        }
      ]
      saveCurrentStore(state)
    },
    removeCity(state, action: PayloadAction<string>) {
      state.cities = state.cities.filter(({ name }) => name !== action.payload)
      saveCurrentStore(state)
    },
    updateCity(state, action: PayloadAction<CityWeather>) {

      const cityToUpdate = state.cities.find(({ name }) => name === action.payload.name);
      if (!!cityToUpdate) {
        cityToUpdate.icon = action.payload.icon
        cityToUpdate.weather = action.payload.weather
      }
      saveCurrentStore(state)

    }

  },
})

export const { addCity, removeCity, updateCity } = citiesSlice.actions
export const citiesReducer = citiesSlice.reducer