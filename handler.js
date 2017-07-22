'use strict';
var request = require('request');

module.exports.index = (event, context, callback) => {
  request('https://ipinfo.io', (err, res, body) => {
    if (err) {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          message: err,
          input: event,
        }),
      });
    }

    var src_ip = JSON.parse(res.body).ip;
    console.log(src_ip);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        src_ip: src_ip,
      }),
    });
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
