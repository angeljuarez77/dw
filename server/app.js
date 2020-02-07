const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(cors())
   .use(bodyParser.json());

app.post('/', async (req, res) => {
  try {
    function spaceToUnderscore(string) {
      return string.split(' ').join('_');
    }
    const { street, street2, zip, state, city } = req.body;

    const request = await axios({
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      url: `https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state.toLowerCase()},ocd-division/country:us/state:${state.toLowerCase()}/place:${spaceToUnderscore(city)}`,
    });
    console.log(request.data);
  } catch(e) {
    console.log(e);
    res.status(500).json({ msg: e.message });
  }
});

app.listen(PORT, () => console.log(`Server on port ${PORT}`));