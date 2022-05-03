import axios from 'axios'

export const getPlacesData = async (type, sw, ne) => {
  try {
    //
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key':
            '671c5b55e4msh1c72ff60063c600p106adbjsn9b6fcf5c3175',
        },
      },
    )

    //   console.log('index data', data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getWeatherData = async (lat, lng) => {
  try {
    //
    const {
      data: { data },
    } = await axios.get(
      'https://community-open-weather-map.p.rapidapi.com/weather',
      {
        params: {
          lat: lat,
          lon: lng,
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key':
            'b4bc022da8msh462ccd58588a476p1f9939jsn13ccf4698828',
        },
      },
    )

    //   console.log('index data', data)
    return data
  } catch (error) {
    console.log(error)
  }
}
