const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
        // Handle GET /
        if (url === '/') {
            res.setHeader('Content-Type', 'text/html');  
            res.write('<html>');
            res.write('<head><title>Form</title></head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        }
    
        // Handle POST /message
        if (url === '/message' && method === 'POST') {
            const body = [];
    
            req.on('data', (chunk) => {
                console.log(chunk); // Log the received chunk
                body.push(chunk);
            });
    
            return  req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                console.log(parsedBody); // Log the received data
                const message = parsedBody.split('=')[1];
                fs.writeFile  ('message.txt', message , (err) => {
                     res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
    
                    });
                 
                
            });
          
           
             
        }
    
        // Default response
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
};

module.exports = requestHandler;