const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/53192b771ce09ea26348b92d078ff334/' + latitude + ',' + longitude + '?units=si'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            // callback(undefined, {
            //     temperature: body.currently.temperature,
            //     preciptation: body.currently.precipProbability,
            //     summary: body.daily.data[0].summary,
            //     forecast: body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + 'degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.'
            // })
            callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + 'degrees out. This high today is '+ body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
