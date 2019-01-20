function Frame() {
  // the two rolls will go in this.rolls
  this.rolls = [];
  // this.score calculates the sum of the elements in the this.rolls array
  this.score = 0;
};

Frame.prototype.isStrike = function() {
  return (this.rolls[0] === 10);
};

Frame.prototype.isSpare = function() {
  return ((this.rolls[0] + this.rolls[1]) === 10);
};

Frame.prototype.roll = function(pins_hit) {
  this.rolls.push(pins_hit);
  if (this.isStrike()) {
    this.rolls[1] = 0;
  };
};

Frame.prototype.isComplete = function() {
   return (this.rolls.length === 2);
};

Frame.prototype.calculateScore = function() {
  for(var i in this.rolls) { this.score += this.rolls[i]; }
  return this.score;
};
