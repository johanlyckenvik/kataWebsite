const http = require('http'),
fs = require('fs');

const loadFile = (path, contentType, status, req, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.writeHeader(status, {"Content-Type": contentType});  
        res.write(data);  
        res.end(); 
    })
}
     
    http.createServer(function(req, res) {  
        switch(true){
            case req.url === '/':
                loadFile('./views/index.html', "text/html", 200, req, res);
                break;
            case req.url === '/styles/styles.css':
                loadFile('./styles/styles.css', "text/css", 200, req, res);
                break;
            case req.url === '/styles/calc-styles.css':
                loadFile('./styles/calc-styles.css', "text/css", 200, req, res);
                break;
            case req.url === '/styles/roman-styles.css':
                loadFile('./styles/roman-styles.css', "text/css", 200, req, res);
                break;
            case req.url === '/scripts/fizzBuzz.js':
                loadFile('./scripts/fizzBuzz.js', "text/javascript", 200, req, res);
                break;
            case req.url === '/fizzbuzz':
                loadFile('./views/fizzBuzz.html', "text/html", 200, req, res);
                break;
            case req.url === '/scripts/calculator.js':
                loadFile('./scripts/calculator.js', "text/javascript", 200, req, res);
                break;
            case req.url === '/calculator':
                loadFile('./views/calculator.html', "text/html", 200, req, res);
                break;
            case req.url === '/scripts/numeralConverters/romanToArabic.js':
                loadFile('./scripts/numeralConverters/romanToArabic.js', "text/javascript", 200, req, res);
                break;
            case req.url === '/romannumerals':
                loadFile('./views/romanNumerals.html', "text/html", 200, req, res);
                break;
            default:
                loadFile('./views/index.html', "text/html", 200, req, res);
        }
    }).listen(3000);
    