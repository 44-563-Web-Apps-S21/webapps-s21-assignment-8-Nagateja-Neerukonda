const http = require('http')    //Pull in a useful node package


const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req, res) => {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title>')
      res.write('<style>table { font-family: arial, sans-serif;border-collapse: collapse;width: 100%;}td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;}</style>')
      res.write('</head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr><th>Location</th><th>Number of Hours</th><th>Amount in $</th></tr>')
      res.write('<tr><td>Chikmagalur</td><td>80</td><td>1000 $</td></tr>')
      res.write('<tr><td>Goa Beach</td><td>60</td><td>500</td></tr>')
      res.write('<tr><td>Araku Valley</td><td>48</td><td>300</td></tr>')
      res.write('<tr><td>ooty</td><td>28</td><td>600</td></tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }
  )

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})