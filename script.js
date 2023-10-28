let bandNames = ['The Beatles', 'The Who', 'Aerosmith', 'Led Zeppelin', 'Anthrax'];
let sortedBandNames = bandNames.sort((a, b) => {
  let aName = a.replace(/^(a|an|the)\s+/i, '');
  let bName = b.replace(/^(a|an|the)\s+/i, '');
  return aName.localeCompare(bName);
});

let ul = document.createElement('ul');
ul.id = 'band';
document.body.appendChild(ul);

sortedBandNames.forEach((name) => {
  let li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});
