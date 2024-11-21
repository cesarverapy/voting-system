const express = require("express");
const topicRoutes = require('./routes/routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({
    extended:true
})); 

app.set('view engine', 'ejs');
app.use('/', topicRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});