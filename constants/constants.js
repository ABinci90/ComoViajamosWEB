﻿(function () {
    var app = angular.module("CV");

    app.factory("constants", function () {
        var constants = {
            "baseUri": "http://localhost:7320/api/", //https://como-viajamos.herokuapp.com/api/
            "interalErrorPath": "error.html",
            "home": "index.html",
            "parameterPrefix": "?",
            "parameterValueAssignment": "=",
            "andParameter": "&"
        };

        return constants;
    });

}());