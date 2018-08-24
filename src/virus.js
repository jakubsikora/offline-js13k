class Virus {
  constructor() {
    this.strength = 0;
    this.addons = [{
      type: 'a',
      complexity: 1,
      strength: 0.001,
    }];
  }

  calculateStrength() {
    const summary = this.addons.reduce((a, b) => {
      return a + (b.complexity * b.strength);
    }, 0);

    let newStrength = parseFloat(this.strength) + parseFloat(summary);
    newStrength = parseFloat(Math.round(newStrength * 100) / 100).toFixed(3);
    this.strength += parseFloat(newStrength);
  }
}

export default new Virus();
