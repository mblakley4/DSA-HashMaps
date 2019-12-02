const HashMap = require('./hashmap')

function main() {
  const lor = new HashMap;
  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandolf');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');
  console.log(lor);

  let x = lor._findSlot('Maiar')
  console.log(x);
}

//main();


// #2
// OUTPUT:
  // {'Hello World.', 20}
  // {'Hello World, 10'}
  // WHY - keys are being overwritten

//Remove Duplicates
function removeDuplicates(string) {
  //new hashmap
  const hash = new HashMap();
  let result = '';
  //loop through whole string
  for (let i = 0; i < string.length; i++) {
      try {
          hash.get(string[i]);
      }
      catch (e) {
          hash.set(string[i], string[i]);
          result += string[i];
      }
  }
  console.log(`result: `, result);
}

removeDuplicates('google all that you think can think of');
