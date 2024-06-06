const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
  );

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );