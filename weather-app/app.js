const request= require('postman-request');
const geocode = require('./utils/geocode')
const forcast = require('./utils/forecast')

/*
const url = 'http://api.weatherstack.com/current?access_key=da91205cc25329cf87902b6456016bef&query=28.704060,77.102493'

request({url : url},(err,res) => {
    // Parse the JSON response
    const responseData = JSON.parse(res.body);

// Access the 'current' object
    const currentWeather = responseData.current;
    console.log(currentWeather)
})*/

geocode('1109 N Highland St, Arlington, VA',(error,data) => {
    if(error) {
        return console.log('error found in api',error);
    }

    forcast(data.latitude,data.longitude,(error,data) => {
        if (error) {
            console.log('error in api',error);
        }
        else {
            console.log('weather',data);
        }

    })
});