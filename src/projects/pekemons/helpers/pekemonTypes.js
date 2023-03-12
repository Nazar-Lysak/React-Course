class Hero {
  constructor(type, strength, weakness) {
    this.type = type;
    this.strength = strength;
    this.weakness = weakness;
  }
}

export const fire = new Hero('Fire', ['Grass'], ['Water']);
export const water = new Hero('Water', ['Fire'], ['Grass', 'Electric']);
export const grass = new Hero('Grass', ['Water'], ['Fire']);
export const electric = new Hero('Electric', ['Water'], ['']);
