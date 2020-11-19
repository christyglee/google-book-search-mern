const axios = require("axios");
const db = require("../models");

// googleController methods
module.exports = {
    findAll: function ({ params }, res) {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${params}`)
            .then(results =>

                console.log(results)
            )
    }
};