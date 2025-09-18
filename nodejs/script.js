// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// import http from "node:http"

// const server = http.createServer((req, res) => {
// res.end("Hello, Node.js !");
// });


// const server = http.createServer((req, res) => 
// {  res.setHeader("Content-Type", "text/plain; charset=utf-8");
//   if (req.url === "/") 
//   {    
//   res.end("Accueil");  
//   } 
//   else if (req.url === "/menu") 
//   {    res.end("Voici le menu");  
//   } 
//   else {    res.statusCode = 404;    
//   res.end("Page non trouvée");  
//   }});


// const server = http.createServer((req, res) => {  
//   if (req.url === "/")
//   { 
//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
//   res.end("Accueil");  
//   } 
//   else if (req.url === "/menu") 
//   { res.setHeader("Content-Type", "application/json; charset=utf-8");    
//   const data = { "plate": "Hello World Burger", "description": "Un cheeseburger classique (pain, steak, fromage, salade, sauce).","image": "🍔"  };    
//   res.end(JSON.stringify(data));  } 
//   else {    
//   res.statusCode = 404;    
//   res.end("Page non trouvée");  
//   }
// });
  
// server.listen(3000, () => {
// console.log("Serveur lancé sur http://localhost:3000");
// });


import express from "express";
import data from "./data.json" with { type: "json" };
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5500/menu"}));

app.get("/", (req, res) => {  
res.send("Accueil");
});


app.get("/menu", (req, res) => {    
res.json(data);
});

app.get("/menu/:id", (req, res) => {  
const id = Number(req.params.id);  
const plat = data.find(p => p.id === id);  
if (!plat) return res.status(404).json({ error: `Plat id=${id} non trouvé` });  
res.json(plat);
});

app.get("/coucou", (req, res) => {  
res.send("Coucou");
});

// app.get("/menu", (req, res) => {    
// const data = { "plate": "Hello World Burger", "description": "Un cheeseburger classique (pain, steak, fromage, salade, sauce).","image": "🍔"  };     
// res.json(data);
// });

app.listen(3000, () => {  console.log("Serveur lancé sur http://localhost:3000");});
