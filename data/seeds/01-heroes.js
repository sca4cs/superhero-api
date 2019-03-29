
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('heroes').insert([
        {name: 'Iron Man', power: 'powered armor suit', universe: 'Marvel'},
        {name: 'Wolverine', power: 'healing, hand-to-hand combat', universe: 'Marvel'},
        {name: 'Spider-Man', power: 'wall-crawling, enhanced reflexes, spider-sense', universe: 'Marvel'},
        {name: 'Captain America', power: 'agility, strength, speed', universe: 'Marvel'},
        {name: 'Thor', power: 'strength, speed, endurance', universe: 'Marvel'},
        {name: 'Black Panther', power: 'strength, speed, agility, healing, reflexes', universe: 'Marvel'},
        {name: 'Hulk', power: 'strength, longevity, speed, stamina, healing', universe: 'Marvel'},
        {name: 'Daredevil', power: 'superhuman senses, radar sense', universe: 'Marvel'},
        {name: 'Doctor Strange', power: 'mastery of magic', universe: 'Marvel'},
        {name: 'Rogue', power: 'absorb the abilities of others', universe: 'Marvel'},
        {name: 'Storm', power: 'manipulate the weather', universe: 'Marvel'},
        {name: 'Captain Marvel', power: 'flight, strength, shoot energy bursts', universe: 'Marvel'},
        {name: 'Batman', power: 'genius-level intellect, detective skills, athleticism', universe: 'DC'},
        {name: 'Superman', power: 'flight, strength, x-ray vision, heat vision, speed, invulnerability', universe: 'DC'},
        {name: 'Wonder Woman', power: 'strength, durability, flight, speed, agility', universe: 'DC'},
        {name: 'Aquaman', power: 'breathe underwater, strength, durability', universe: 'DC'},
        {name: 'Catwoman', power: 'acrobatic ability, stealth', universe: 'DC'},
        {name: 'Green Lantern', power: 'energy projection, force field, energy construct creation', universe: 'DC'},
        {name: 'Harley Quinn', power: 'strength, agility, immune to toxins', universe: 'DC'},
        {name: 'The Flash', power: 'super speed', universe: 'DC'},
        {name: 'Supergirl', power: 'strength, speed, stamina, x-ray vision, flight, invulnerability', universe: 'DC'},
        {name: 'Cyborg', power: 'strength, speed, stamina, flight, durability', universe: 'DC'},
        {name: 'Beast Boy', power: 'change into any animal', universe: 'DC'},
        {name: 'Green Arrow', power: 'acrobatic ability, archery, aviation', universe: 'DC'},
        {name: 'Nightwing', power: 'acrobatic ability, detective skills, athleticism', universe: 'DC'},
      ]);
    });
};
