const express  = require("express");
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000)

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(require('./routes/usuarios'));

//start server
app.listen(app.get('port'), () => {
    console.log('server en puerto', app.get('port'));
});
