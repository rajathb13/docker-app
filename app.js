const express = require("express");
const app = express()

app.get('/',(req,res) => {
    res.json({message: 'Response is Success'})
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`listening on ${port}`))