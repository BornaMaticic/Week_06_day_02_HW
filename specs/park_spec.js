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

  it('should have a name', function () {
    const actual = testPark.name;
    const expected = parkName;
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function () {
    const actual = testPark.price;
    const expected = parkPrice;
    assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = testPark.dinosaurs;
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection',    function () {
    testPark.addDinosaur(dinosaur1);
    const actual = testPark.dinosaurs;
    const expected = [dinosaur1];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    testPark.addDinosaur(dinosaur1);
    testPark.addDinosaur(dinosaur2);
    testPark.removeDinosaur(dinosaur1);
    const actual = testPark.dinosaurs;
    const expected = [dinosaur2];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    testPark.addDinosaur(dinosaur1);
    testPark.addDinosaur(dinosaur2);
    testPark.addDinosaur(dinosaur3);
    const actual = testPark.findMostPopularDinosaur();
    const expected = dinosaur1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    testPark.addDinosaur(dinosaur1);
    testPark.addDinosaur(dinosaur2);
    testPark.addDinosaur(dinosaur3);
    testPark.addDinosaur(dinosaur4);
    testPark.addDinosaur(dinosaur5);
    const actual = testPark.findAllDinosaurBySpecies('t-rex');
    const expected = [dinosaur1];
    const actual2 = testPark.findAllDinosaurBySpecies('velociraptor');
    const expected2 = [dinosaur2];
    assert.deepStrictEqual(actual, expected);
    assert.deepStrictEqual(actual2, expected2);
  });

  describe('Park Revenue', function () {
    it ('calculate the number of visitors per day', function () {
      testPark.addDinosaur(dinosaur1);
      testPark.addDinosaur(dinosaur2);
      testPark.addDinosaur(dinosaur3);
      testPark.addDinosaur(dinosaur4);
      testPark.addDinosaur(dinosaur5);
      const actual = testPark.numberOfVisitorsPerDay ();
      const expected = 110;
      assert.strictEqual(actual, expected);
    });
  });
});
