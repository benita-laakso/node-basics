const express = require('express');
const app = express();

const db = require('./db');
const port = 3000;

//URL Can be done by router... const baseURL= 'api/v1'

app.use(express.json());
//Get all pois
app.get('/api/v1/pois', (request, response) => {
  const pois = db.getPoi();
  response.send(pois);
});

//Get a POI by id
app.get('/api/v1/pois/:id', (request, response) => {
  const id = request.params.id;
  const poi = db.getPoi(id);
  console.log(id);

  if (poi) {
    response.send(poi);
  } else {
    response.status(404).send()
  }
});
//Add POI
app.post('/api/v1/pois', (request, response) => {
  let poi = request.body;
  if (poi.name && poi.description && poi.coordinates && poi.coordinates.lat && poi.coordinates.lng) {
    poi = db.createPoi(poi);
    response.status(201).send(poi);
  } else {
    response.status(400).send();
  }
});

// Update POI

//Delete POI   
app.delete('/api/v1/pois/:id', (request, response) =>{
  const id = request.params.id;
  if(id && db.getPoi(id) ){
    db.deletePoi(id);
    response.status(204).send();
  }else{
    response.status(404).send();
  }
}

app.listen(port, () => {
  console.log('Server listening on ${port}');
})
