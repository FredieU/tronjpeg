const imgArray = [
  'adrian',
  'kajol',
  'martha',
  'skater',
  'skater2',
  'trini',
  'ubdulle',
  'ubdulle2',
  'zain',
];

export default () => imgArray.map(imgName => require(`../img/${imgName}.jpg`));
