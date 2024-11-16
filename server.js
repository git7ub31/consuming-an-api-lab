require('dotenv').config()
const express = require('express');
const app = express()
const PORT = process.env.PORT

//link the api
const apiCntrl = require("./controllers/api");
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use("/weather", apiCntrl);

app.get("/", async (req,res) => {
    res.render("index.ejs");
})

app.post("/weather", async (req, res) => {
    const { zipCode } = req.body;  
    const apiKey = process.env.API_KEY;  

    try {
        res.redirect(`/weather?zipCode=${zipCode}`);
    } catch (err) {
        console.error(err);
    }
});


app.listen(4000, () => {
    console.log("listening on port 4000!");
});