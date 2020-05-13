const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/db.config');

// force: true will drop the table if it already exists
db.sequelize.sync().then(() => {
  console.log('Connection Successfully Established');
});

require('./routes/user.route')(app);

app.listen(PORT, () => {
  console.log('App listening at http://localhost:', PORT);
});
