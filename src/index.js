import express from "express";

const app = express();

const PORT = process.env.PORT || 3001;

/* 
 Routes definit une route Get sur / qui renvoie un message
 La fonction app.get prend deux arguments
 le chemin de la route
 et une fonction qui prend deux arguments :
 request et response 
 */
app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
