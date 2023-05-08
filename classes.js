class Person {
  
  constructor(name, age) {
    this.name = name
    this.age = age
    this.scores = null
  }

  getName() {
    return this.name
  }

  setScore(scores) {
    this.scores = scores
  }

  getScore() {
    return this.scores
  }

  getAverageScore() {
    let length = this.scores.length
    let total = this.scores.reduce((total, score) => total + score)
    return total/length
  }

}

const person = new Person('augustine', 90)

person.setScore([20, 53, 75, 25, 19, 90])

console.log(person.getScore());
console.log(person.getAverageScore());
