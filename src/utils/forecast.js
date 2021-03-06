const request = require('request')

const forecast = (long, lat, callback) => {
    const options = {
        method: 'GET',
        url: 'https://foreca-weather.p.rapidapi.com/current/' + long +',' + lat,
        qs: {alt: '0', tempunit: 'C', windunit: 'MS', tz: 'Europe/London', lang: 'en'},
        json: true,
        headers: {
          'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
          'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
          useQueryString: true
        }
      };

    request(options, (error,  {body}) => {
        if (error) {
            callback('Could not connect to weather API', undefined)
        } else {
            var mood = body.current.symbolPhrase
            mood = mood.charAt(0).toUpperCase() + mood.slice(1)
            callback(undefined, `${mood}, It is currently ${body.current.temperature} degrees but it feels like \
             ${body.current.feelsLikeTemp} degrees out there and there is ${body.current.precipProb} percent probability of it raining`)
        }
    })  
      
}

module.exports = forecast