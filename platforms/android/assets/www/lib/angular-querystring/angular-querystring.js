(function() {
    'use strict';
    
    angular.module('querystring', [])
    .constant('$querystring', (function() {
        return {
            toString: function(data) {
                var str = "";
                for (var i in data)
                    str += (str ? ("&" + i + "=" + data[i]) : (i + "=" + data[i]));
                return str;
            },
            toJSON: function(data) {
                var pairs = data.slice(1).split('&'), result = {};
                pairs.forEach(function(pair) {
                    pair = pair.split('=');
                    result[pair[0]] = decodeURIComponent(pair[1] || '');
                });
                return JSON.parse(JSON.stringify(result));
            }
        };
    }()));

}());