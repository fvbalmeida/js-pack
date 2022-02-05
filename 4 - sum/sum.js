function sum() {
    let three = 3
    let five = 5
    let max = 10;
    total = 0

    for(i=0; i < max; i++){
        if(i % three == 0 || i % five == 0){
            total += i;
        }
    }

    console.log(`A soma dos números múltiplos de 3 e 5 até ${max} é ${total}`)
}

sum()