define(function (require) {
    "use strict";
    
    var app = require('app');
		
    return Backbone.Router.extend({
        routes: {
            "": "home"
        },
        home: function () {
        }
    });
});
