const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


// With promises methods
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url_api, true);
        xhr.onreadystatechange = event => {
            if (xhr.readyState === 4){
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(new Error(`Error ${url_api}`))
                }
            }
        }
        xhr.send();
    })

}

// with callbacks methods
const sendData = (url_api, data, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url_api, true);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(null ,JSON.parse(xhr.responseText))
            } else {
                let err = new Error("Error")
                return callback(err, null)
            };
        };
    };
    xhr.send(data)
  
};


module.exports = { fetchData, sendData };