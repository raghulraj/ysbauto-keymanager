var keymanager = {

    setKey: function(host,user) {
        httpSync = require('http-sync');
        var request = httpSync.request({
        method: 'GET',
        headers: {},
        body: '',

        protocol: 'http',
        host: host,
        port: 8080,
        path: '/api/setkey?user='+user
        });
        var response = request.end();
        var resp = JSON.parse(response.body.toString());
        var newKey = resp['setkey']
        return newKey;
        },

    getKey: function(host,user) {
        httpSync = require('http-sync');
        var request = httpSync.request({
        method: 'GET',
        headers: {},
        body: '',

        protocol: 'http',
        host: host,
        port: 8080,
        path: '/api/getkey?user='+user
        });
        var response = request.end();
        var resp = JSON.parse(response.body.toString());
        var newKey = resp['getkey']
        return newKey;
        },

};

module.exports = keymanager;

