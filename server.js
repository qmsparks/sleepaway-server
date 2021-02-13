const express = require('express');
const cors = require('cors');

const app = express();
require('express-ws')(app);

require('dotenv').config();
const PORT = process.env.PORT || 3001;

const routes = require('./routes');

app.use(express.json());
app.use(cors());


app.use('/api/v1/auth', routes.auth);


// TODO so help me god I will understand you, websockets
app.ws('/', (ws, req) => {
  ws.on('message', msg => {
    console.log(msg);
  });
  console.log('connected to socket');
})

app.listen(PORT, () => console.log(`Server is listening for requests at port ${PORT}`));