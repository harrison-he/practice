const http = require('http');
const path = require('path')
const fs = require('fs');

const toDoItems = ["Example To Do", "Example To Do 2"];

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);

  let extname = path.extname(filePath);

  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".png":
      contentType = "image/jpg";
      break;
  }

  if ([".js",".css",".json",".png",".png",".html"].includes(extname)) {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code == "ENOENT") {
          fs.readFile(path.join(__dirname, "public", "notfound.html"), (error, notFoundContent) => {
            if (error) throw error;
  
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(notFoundContent, 'utf8');
          })
  
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`)
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, 'utf8')
      }
    })
  } else {
    if (req.url === "/api/toDo") {
      if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": contentType});
        res.end(JSON.stringify(toDoItems),'utf8')
      } else if (req.method === "POST") {
        let data = "";
        req.on('data', chunk => {
         data += chunk;
        });
        req.on("end", () => {
          toDoItems.push(data)
          res.end();
        })
        
      }
    }
  }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))