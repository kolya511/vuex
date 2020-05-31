var express = require('express');
var router = express.Router();
var axios = require('axios')
//var secured = require('../lib/middleware/secured')

router.get('/', function (req, res) {
    var { order } = req.query

    axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => res.data)
        .then(resData => {
            if (resData) {

                const sortCountriesByPopulation = resData.map(i => i).sort((a, b) => a.population > b.population ? -order : order);

                res.status(200).send(sortCountriesByPopulation)
            }
            else res.status(500).send("Fetch Error")
        })
})

module.exports = router;