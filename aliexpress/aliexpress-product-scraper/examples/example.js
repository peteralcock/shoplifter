const scrape = require('../index.js');
const product = scrape('1234567890');

product.then(res => {
  console.log('The JSON: ', res);
});