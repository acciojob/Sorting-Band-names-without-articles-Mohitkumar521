//your code here
// An array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Led Zeppelin', 'Nirvana'];

// Function to remove articles and sort the band names
function sortBandNamesWithoutArticles(bandNames) {
  const articles = ['a', 'an', 'the'];
  
  // Custom sorting function
  const customSort = (a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    for (const article of articles) {
      if (a.startsWith(article + ' ')) {
        a = a.slice(article.length + 1);
        break;
      }
    }

    for (const article of articles) {
      if (b.startsWith(article + ' ')) {
        b = b.slice(article.length + 1);
        break;
      }
    }

    return a.localeCompare(b);
  };

  // Sort the band names using the custom sorting function
  bandNames.sort(customSort);

  return bandNames;
}

// Sort the band names without articles
const sortedBandNames = sortBandNamesWithoutArticles(bandNames);

// Update the HTML content dynamically
const bandList = document.getElementById('band');
bandList.innerHTML = sortedBandNames.map(band => `<li>${band}</li>`).join('');

