const express = require('express');
const app = express();
const morgan = require("morgan");
const path = require('path')
const dotenv = require('dotenv'); 
dotenv.config();

// settings
app.set('port', process.env.PORT);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Stactic content
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require("./routes/index"));
//const indexRouter = require("./routes/index");
//app.use("/", indexRouter);


// listening the Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});