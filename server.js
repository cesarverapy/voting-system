const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({
    extended:true
})); 

app.set('view engine', 'ejs');

require('./controllers/topicsController')(app);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});