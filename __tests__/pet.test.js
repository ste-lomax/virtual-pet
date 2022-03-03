const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  
    it('sets the name property', () => {
      const pet = new Pet('Fido');

      expect(pet.name).toEqual('Fido');
    });

    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });    
  });

describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });

    it('increases hunger by 5', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.hunger).toEqual(5);
    });

    it('reduces fitness by 3', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.fitness).toEqual(7);
    });
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('Fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });

    it('increases fitness to a max of 10', () => {
      const pet = new Pet('Fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('Fido');
  
      pet.hunger = 5;
      pet.feed();
  
      expect(pet.hunger).toEqual(2);
    });

    it('decreases hunger to a min of 0', () => {
      const pet = new Pet('Fido');
  
      pet.hunger = 2;
      pet.feed();
  
      expect(pet.hunger).toEqual(0);
    });
  });

  describe('checkUp', () => {
    it('checks if fitness is 3 or less', () => {
      const pet = new Pet('Fido');
  
      pet.fitness = 3;
      pet.checkUp();
  
      expect(pet.status).toEqual('I need a walk');
    });

    it('checks if hunger is 5 or more', () => {
      const pet = new Pet('Fido');
  
      pet.hunger = 5;
      pet.checkUp();
  
      expect(pet.status).toEqual('I am hungry');
    });

    it('checks if fitness is 3 or less and hunger is 5 or more', () => {
      const pet = new Pet('Fido');
  
      pet.fitness = 3;
      pet.hunger = 5;
      pet.checkUp();
  
      expect(pet.status).toEqual('I am hungry AND I need a walk');
    });

    it('checks if fitness is 4 or more and hunger is 4 or less', () => {
      const pet = new Pet('Fido');
  
      pet.fitness = 4;
      pet.hunger = 4;
      pet.checkUp();
  
      expect(pet.status).toEqual('I feel great!');
    });
  });