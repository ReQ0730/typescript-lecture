import { Character } from "./character";

export class Archer extends Character {
  private arrows: number;

  constructor(name: string, hp: number, arrows: number) {
    super(name, hp);
    this.arrows = arrows;
  };

  attack() {
    console.log(`${this.name} は矢を放った!`);
  }
}
