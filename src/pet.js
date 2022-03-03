function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.status = '';
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

const MAXIMUM_FITNESS = 10;

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
};

const MINIMUM_HUNGER = 0;

Pet.prototype.feed = function() {
    if ((this.hunger - 3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
};

Pet.prototype.checkUp = function() {
    if ((this.fitness <= 3) && (this.hunger >= 5)) {
        this.status = 'I am hungry AND I need a walk';
        ('I am hungry AND I need a walk');
    } else if (this.fitness <= 3) {
        this.status = 'I need a walk';
        console.log('I need a walk');
    } else if (this.hunger >= 5) {
        this.status = 'I am hungry';
        console.log('I am hungry');
    } else this.status = 'I feel great!';
    console.log('I feel great!');
};

module.exports = Pet;
