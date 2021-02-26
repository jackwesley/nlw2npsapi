import "reflect-metadata";
import "./database";
import express from "express";


const app = express();


app.listen(3333, () => console.log("Server is running"));

app.get("/", (request, response) => {
    return response.json("Helloo from NLW 4");
});

app.post("/", (request, response) => {
    return response.json({message: "Helloo from NLW 4"});
});



