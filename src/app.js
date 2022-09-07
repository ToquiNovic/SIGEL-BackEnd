const express  = require("express");
const app = express();

//settings
app.set('port', process.env.PORT || 3000)

//middleware
app.use(express.json());

//routes
app.use(require('./routes/usuarios'));

//start server
app.listen(app.get('port'), () => {
    console.log('server en puerto', app.get('port'));
});
