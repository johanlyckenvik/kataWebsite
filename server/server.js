const http = require('http'),
    fs = require('fs');
     
    http.createServer(function(req, res) {  
        if (req.url === '/'){
            fs.readFile('./views/index.html', (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.writeHeader(200, {"Content-Type": "text/html"});  
                res.write(data);  
                res.end(); 
            })
            //
            // STYLES 
            //

        } else if (req.url === '/styles/styles.css'){
            fs.readFile('./styles/styles.css', (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.writeHeader(200, {"Content-Type": "text/css"});  
                res.write(data);  
                res.end(); 
            })
        } else if (req.url === '/styles/calc-styles.css'){
            fs.readFile('./styles/calc-styles.css', (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.writeHeader(200, {"Content-Type": "text/css"});  
                res.write(data);  
                res.end(); 
            })
        } else if (req.url === '/styles/roman-styles.css'){
            fs.readFile('./styles/roman-styles.css', (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.writeHeader(200, {"Content-Type": "text/css"});  
                res.write(data);  
                res.end(); 
            })

            //
            // FIZZBUZZ
            //

        }  else if (req.url === '/scripts/fizzBuzz.js'){
            fs.readFile('./scripts/fizzBuzz.js', (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.writeHeader(200, {"Content-Type": "text/javascript"});  
                res.write(data);  
                res.end(); 
            })
            
        } else if (req.url === '/fizzbuzz'){
            fs.readFile('./views/fizzBuzz.html', (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.writeHeader(200, {"Content-Type": "text/html"});  
                res.write(data);  
                res.end(); 
            }) 
            //
            // CALCULATOR
            //
        } else if (req.url === '/scripts/calculator.js'){
            fs.readFile('./scripts/calculator.js', (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.writeHeader(200, {"Content-Type": "text/javascript"});  
                res.write(data);  
                res.end(); 
            })
            
        } else if (req.url === '/calculator'){
            fs.readFile('./views/calculator.html', (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.writeHeader(200, {"Content-Type": "text/html"});  
                res.write(data);  
                res.end(); 
            }) 
            //
            // ROMAN NUMBERALS
            // 
        } else if (req.url === '/scripts/numeralConverters/romanToArabic.js'){
            fs.readFile('./scripts/numeralConverters/romanToArabic.js', (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.writeHeader(200, {"Content-Type": "text/javascript"});  
                res.write(data);  
                res.end(); 
            })
            
        } else if (req.url === '/romannumerals'){
            fs.readFile('./views/romanNumerals.html', (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.writeHeader(200, {"Content-Type": "text/html"});  
                res.write(data);  
                res.end(); 
            })
        }
        
    }).listen(3000);

