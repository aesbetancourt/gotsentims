const { fetchData, sendData } = require('./utils/dataHelpers');
const {randomQuote, sentimentClasification} = require('./utils/api')


fetchData(randomQuote)
    .then(res => {
        console.log(`Quote: ${res.sentence}`)
        return res.sentence
    })
    .then(res => {
        let data = JSON.stringify({"text": res}) 
        sendData(sentimentClasification, data, (err, response) => {
            if (err) return console.error(err);
            console.log(`Type: ${response.result.type}`)
        })
    })
    .catch(err => console.error(err));







