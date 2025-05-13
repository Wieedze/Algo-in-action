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


function mergeSort(arr) {
    let comparaisons = 0;

    function sort(array) {
        if (array.length <= 1) return array;

        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);

        return merge(sort(left), sort(right));
    }

    function merge(left, right) {
        const result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            comparaisons++;
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
    }

    const sorted = sort(arr);
    console.log(`Merge Sort: ${comparaisons} comparaisons - [${sorted.join(', ')}]`);
    return sorted;
}
mergeSort(numbers);
