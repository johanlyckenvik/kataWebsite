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

        } else if (req.url === '/styles/styles.css'){
            fs.readFile('./styles/styles.css', (err, data) => {
                if (err) {
                    console.log(err);
                }
                res.writeHeader(200, {"Content-Type": "text/css"});  
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
        }
    }).listen(3000);

