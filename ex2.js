const fs = require('fs');

const fileName = process.argv[2];
if (!fileName) {
    console.error('Veuillez fournir un nom de fichier.');
    process.exit(1);
}

let numbers;

try {
    const content = fs.readFileSync(fileName, 'utf8').trim();
    console.log('Contenu brut du fichier :', content);
    numbers = content.split(/\s+/).map(Number);
    if (numbers.some(isNaN)) {
        throw new Error('Le fichier contient des valeurs non numériques.');
    }

    console.log('Données d\'origine :', numbers);
} catch (err) {
    console.error('Erreur de lecture :', err.message);
    process.exit(1);
}

//Algorythm O(n²)

function sortByHigh(array) {
    const view = [];

    for (let i = array.length - 1; i >= 0; i--) {
        let isGreater = true;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] >= array[i]) {
                isGreater = false; 
                break; 
            }
        }
        if (isGreater) {
            view.push(array[i]);
        }
    }

    return view.length; 
}
console.log(sortByHigh(numbers))