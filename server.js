const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts'),
    morgan = require('morgan'),
    router = require('./routes/index');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
//
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(express.json());
app.use(layouts);
app.use(express.urlencoded({
    extended: false
}));


app.use("/", router);


app.listen(app.get('port'), () => {

    console.log(`...server started  http://localhost:${app.get(`port`)}`)
})


console.log("...no issues so far 😐")