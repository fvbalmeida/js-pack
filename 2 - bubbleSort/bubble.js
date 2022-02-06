function bubbleSort(arr) {

    const array = arr.slice()

    for (let j = 0; j < array.length - 1; j++) {
        for (let k = 0; k < array.length - 1 - j; k++) {
            if (array[k] > array[k+1]) {
                [array[k], array[k+1]] = [array[k+1], array[k]]
            }
        }
    }

    return array
}

randomArray = Array.from({length: 30}, () => Math.floor(Math.random() * 100))

const array = randomArray

console.log(bubbleSort(array))

