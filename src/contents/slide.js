"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var getSlideData = function () {
    axios_1.default
        .get("https://raw.githubusercontent.com/jun-eg/test-zip/main/data/slide.json")
        .then(function (response) {
        console.log(response.data);
    })
        .catch(function (error) {
        console.error(error);
    });
};
getSlideData();
