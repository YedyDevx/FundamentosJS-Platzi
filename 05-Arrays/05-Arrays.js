//Seleccionando con Filter()
const numbers = [1, 2, 3, 4, 5]
const evenNumbers = numbers.filter(number => number % 2 === 0) 

console.log(numbers)
console.log(evenNumbers)
//Asi seleccionamos la lista de numeros y sacamos los numeros pares tambgien 


const newReduce = [1, 2, 3, 4, 5]
const sum = newReduce.reduce((accomulator, currentValue) => accomulator + currentValue, 0)

console.log(sum)

const words = ['apple', 'banana', 'banana', 'cherry', 'date', 'date']
const wordFrequency = words.reduce((acc, word) => {
    if (acc[word]) {
        acc[word]++
    } else {
        acc[word] = 1
    }
    return acc
}, {})
console.log(wordFrequency)

const newNumbers = [2, 3, 2, 5, 3, 7, 2, 5, 5, 3, 7, 7, 7, 1, 9, 1]
const arrayNumbers = newNumbers.reduce((acc, number) => {
    if(acc[number]) {
        acc[number] ++
    } else {
        acc[number] = 1
    }
    return acc
},{})

console.log(arrayNumbers)

const newWord = "programacion"
const newWord2 = newWord.split('').reduce((acc, letter) => {
    if(acc[letter]) {
        acc[letter] ++
    } else {
        acc[letter] = 1
    }
    return acc
}, {})
console.log(newWord2)
