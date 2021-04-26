import myJson from './JSONData.json'

var data = [];
Object.keys(myJson).forEach(key => data.push({name: key, value: myJson[key]}))
const fs = require('fs')

fs.writeFile('./debug.txt', data, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})
