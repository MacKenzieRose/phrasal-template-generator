var colour;
var creature;
var adjective;
var pastVerb;
var story;

alert('Let’s make a story together!');

colour = prompt('A colour (orange, indigo, etc.)');
creature = prompt('A creature (dragon, moth, etc.)');
adjective = prompt('An adjective (beautiful, super, etc.)');
pastVerb = prompt('A past tense verb (ran, burped, etc.)');
story = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning\n\nEnter the letter below:');

switch (story) {
  case 'a' : document.write(`After snacking on <span>${adjective}</span> treats, the <span>${colour}</span> bellied <span>${creature}</span> <span>${pastVerb}</span> for hours.`);
    break;

  case 'b' : document.write(`Amelia <span>${pastVerb}</span> through the <span>${adjective}</span> <span>${colour}</span> nebula escaping the space <span>${creature}</span>.`);
    break;

  case 'c' : document.write(`Jackson chose his <span>${adjective}</span>, <span>${colour}</span> <span>${creature}</span> card and <span>${pastVerb}</span> it to the table knowing he won.`);
    break;
}
