const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let testPark, parkName, parkPrice, dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5;

  beforeEach(function () {

    parkName = "Jurassic Park";
    parkPrice = 30;
    testPark = new Park(parkName, parkPrice);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 30);
    dinosaur2 = new Dinosaur('velociraptor', 'omnivore', 20);
    dinosaur3 = new Dinosaur('argentinosaurus', 'herbivore', 25);
    dinosaur4 = new Dinosaur('triceratops', 'carnivore', 15);
    dinosaur5 = new Dinosaur('stegasaurus', 'herbivore', 20);
  })
