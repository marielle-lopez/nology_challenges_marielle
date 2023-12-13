class Dog {
  static allDogs = [];

  static getDogsByBreed(breed) {
    return this.allDogs.filter((dog) => dog.breed === breed);
  }

  static averageWalkDistance() {
    const averages = this.allDogs.map((dog) => dog.averageWalkDistance());
    const sum = averages.reduce((total, average) => total + average, 0);

    return sum / this.allDogs.length;
  }

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.walks = [];
    Dog.allDogs.push(this);
  }

  walk(distance) {
    console.log(`Cool! You've walked ${this.name} ${distance} metres.`);
    this.walks.push(distance);
  }

  totalWalkDistance() {
    const total = this.walks.reduce((acc, val) => acc + val, 0);
    console.log(`${this.name} has walked a total of ${total} metres.`);
  }

  walkSummary() {
    return this.walks.map((distance, i) =>
      console.log(`Day ${i + 1}: ${distance} metres`)
    );
  }
}

let pebbles = new Dog("Pebbles", "Chihuahua Shih Tzu");
pebbles.walk(500);
pebbles.walk(600);
pebbles.walk(450);

pebbles.totalWalkDistance();
pebbles.walkSummary();

console.log(Dog.getDogsByBreed("Chihuahua Shih Tzu"));
console.log(Dog.allDogs);
