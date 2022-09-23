const express  = require("express");
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//settings
app.set('port', 3001)

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use(require('./routes/usuarios'));
app.use(require("./routes/login"));

//start server
app.listen(app.get('port'), () => {
    console.log('server en puerto', app.get('port'));
});
