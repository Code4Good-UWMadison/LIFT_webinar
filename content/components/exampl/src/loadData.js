const axios = require('axios');

axios.get('JSONData.json')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
