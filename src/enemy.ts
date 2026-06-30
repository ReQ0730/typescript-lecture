import { Character } from "./character";

export class Enemy extends Character {
  //TODO: maxHp プロパティを追加する
    private maxHp: number;
  //TODO: maxHp プロパティの初期化
constructor(name: string, hp: number) {
    super(name, hp);
    this.maxHp = hp;
}

  //TODO: maxHp に対する現在の hp の割合を返す getHpRatio メソッドを追加する
public getHpRatio(): number {
    return this.hp / this.maxHp;
}

  //TODO: 残り HP が 30% 以下の場合、行動を変化させる
  // 通常時 : name + "は攻撃してきた！"
  // 残り HP が 30% 以下 : name + "は必死に抵抗している！"
public attack(_opponent: Character): void { //まだダメージを与える処理は書かない[_]
if (this.getHpRatio() <= 0.3) {
    console.log(`${this.name}は必死に抵抗している！`);
    } else {
    console.log(`${this.name}は攻撃してきた！`);
    }
}
}