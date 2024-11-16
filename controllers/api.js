const router = require("express").Router();
const axios = require("axios");
const { response } = require("express");

// home page
router.get("/", async (req,res)=> {
    const zipCode = req.query.zipCode;
    const apiKey = process.env.API_KEY;

    axios({
        method: 'get',
        url: "https://api.openweathermap.org/data/2.5/weather", 
        params: {
            zip: `${zipCode},us`,
            units: 'imperial',
            appid: apiKey
        }
        })
        .then(response=> {
            res.render("weather/show.ejs", {
                cityName: response.data.name,
                temperature: response.data.main.temp,
                weatherDescription: response.data.weather[0].description
            });
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router; 