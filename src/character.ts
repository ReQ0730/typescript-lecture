export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number; // インスタンスからはアクセスできないが、継承先（子クラス）からはアクセスできる

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }
// ダメージを受けて hp を減らす
  public takeDamage(damage: number): void {
    this.hp -= damage;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }
// hp が 0 以下かを返す
  public isDead(): boolean {
    return this.hp <= 0;
  }

  abstract attack(opponent: Character): void;
}
