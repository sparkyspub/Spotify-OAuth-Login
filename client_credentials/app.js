const request = require('request');

const client_id = 'd937b218883a44a4be33d331d8188ad4';
const client_secret = '9c05d3c1cb584e00bd3643d7ffd98f77';

let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' +client_secret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200){
        let token = body.access_token;
        let options = {
            url: 'https://api.spotify.com/v1/users/sparkyspub',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            json: true
        };
        request.get(options, function(error, response, body) {
            console.log(body);
        });
    }
});