export const damage = (heroType, opponentType, attackPower, opponentDefense) => {
  let effectiveness = null;

  switch (true) {
    case opponentType.weakness.includes(heroType.type):
      effectiveness = 2;
      break;
    case opponentType.strength.includes(heroType.type):
      effectiveness = 0.5;
      break;
    default:
      effectiveness = 1;
  }

  return 50 * (attackPower / opponentDefense) * effectiveness;
};
