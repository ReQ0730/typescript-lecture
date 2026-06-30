import { Mage } from "./mage";
import { Warrior } from "./warrior";
import { Enemy } from "./enemy";

// const character = new Character("太郎", 200); // abstract class はインスタンス化出来ないのでエラーが出る

const warrior = new Warrior("アーサー", 100, "エクスカリバー");
const mage = new Mage("メディア", 80);
const slime = new Enemy("スライム", 50);

warrior.showStatus();
warrior.attack(slime); // 引数に slime を渡す

// メイジのターン（スライムを攻撃）
mage.showStatus();
mage.attack(slime); // 引数に slime を渡す

// スライムのターン
slime.showStatus();
slime.attack(warrior); // 引数に warrior を渡す（または mage）

slime.takeDamage(40);
slime.showStatus();

slime.attack(mage); // 引数に mage を渡す（または warrior）