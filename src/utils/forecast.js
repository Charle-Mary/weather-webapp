const request = require('request')

const forecast = (long, lat, callback) => {
    const options = {
        method: 'GET',
        url: 'https://foreca-weather.p.rapidapi.com/current/' + long +',' + lat,
        qs: {alt: '0', tempunit: 'F', windunit: 'MS', tz: 'Europe/London', lang: 'en'},
        json: true,
        headers: {
          'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
          'x-rapidapi-key': 'b515287a96msh5d85a8855aebb8fp1d25b9jsnf2f211ec4c7a',
          useQueryString: true
        }
      };

    request(options, (error,  {body}) => {
        if (error) {
            callback('Could not connect to weather API', undefined)
        } else {
            callback(undefined, `It is currently ${body.current.temperature} degrees out there and there is ${body.current.precipProb} percent probability of it raining`)
        }
    })  
      
}

module.exports = forecast