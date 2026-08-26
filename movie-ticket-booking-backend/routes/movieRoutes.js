const express = require("express");

const router = express.Router();


let movies = [
    {
        id:1,
        title:"Avengers",
        language:"English",
        price:200
    },
    {
        id:2,
        title:"KGF",
        language:"Kannada",
        price:150
    }
];


// Get movies
router.get("/", (req,res)=>{
    res.json(movies);
});


// Add movie
router.post("/", (req,res)=>{

    const movie = req.body;

    movies.push(movie);

    res.status(201).json(movie);

});


module.exports = router;