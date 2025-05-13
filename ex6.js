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

//Only one pass on the list 2 

function sortByHigh(arr){
    let maxHigh = 0
    const view = [] 
    
    for(i = arr.length -1 ; i >=0 ; i--){

        if(arr[i] > maxHigh){
            view.push(arr[i])
            maxHigh = arr[i]
        }
    }
    return view.length
}
console.log(sortByHigh(numbers))