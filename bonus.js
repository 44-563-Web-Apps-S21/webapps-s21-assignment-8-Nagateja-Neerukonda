const http = require('http')    //Pull in a useful node package


const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                const advices = ["Get your love out of your life forever.",
                    "Mingle with positive people.",
                    "Concentrate on your work.",
                    "Never, spy on him\her.",
                    "Go for a vacation to divert your mind.",
                    "Best friends and best partners go hand in hand.",
                    "In a fight, there are no winners.", " Always know your why."
                ]
                let randomValue = Math.floor(Math.random() * advices.length)
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write(`${advices[randomValue]}`)
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})