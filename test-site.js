import loadtest from 'loadtest'
// const loadtest = require('loadtest')

const options = {
    url: 'https://traders-johns-e-commerce-site.onrender.com/',
    concurrency: 10,
    maxRequests: 1000
};
loadtest.loadTest(options, function(error, result) {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
});        