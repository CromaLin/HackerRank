const ar = [1, 2, 3];

function simpleArraySum(ar) {
    var result = 0 
    for (let i = 0; i < ar.length; i++){
        result += ar[i]
    }
    return result;
}

const result = simpleArraySum(ar)

console.log(result)