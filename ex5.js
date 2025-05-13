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


// Only on pass on the list 1

function findK(arr, k){
    
    let seen = new Set()

    for(i=0; i<arr.length ; i++){
        let pair = k - arr[i]  
            
        if (seen.has(pair)){
            return true
        }
        seen.add(arr[i])
    }
    return false
}
console.log(findK(numbers, 20))