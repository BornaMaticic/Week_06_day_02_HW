const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const index = this.dinosaurs.indexOf(dinosaur);
  if (index > -1) {
    this.dinosaurs.splice(index, 1);
  }
};
