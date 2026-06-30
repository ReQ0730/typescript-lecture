import { Character } from './character.ts';

export class Mage extends Character {
  override attack(_opponent: Character) {
    console.log(`${this.name}は魔法を唱えた！`);
  }
}
