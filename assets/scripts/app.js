const ATTACK = 10;
const strongAttack = 20;
const MonsterAttack = 15;
let choosenMaxlife = 100;
let currentPlayerhealth = choosenMaxlife;
let currentMonsterhealth = choosenMaxlife;

adjustHealthBars(choosenMaxlife);

function monsterattack(mode) {
  let maxdamage;
  if (mode === "Attack") {
    maxdamage = ATTACK;
  } else if (mode === "strongattack") {
    maxdamage = strongAttack;
  }
  const damage = dealMonsterDamage(maxdamage);
  currentMonsterhealth -= damage;
  const playerdamage = dealPlayerDamage(MonsterAttack);
  currentPlayerhealth -= playerdamage;

  if (currentMonsterhealth <= 0) {
    alert("you won");
  } else if (currentPlayerhealth <= 0) {
    alert("You lost");
  }
}

function attackHandler() {
  monsterattack("Attack");
}

function strongAttackHandler() {
  monsterattack("strongattack");
}
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
