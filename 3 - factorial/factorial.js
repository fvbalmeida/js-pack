function factorial(){
    let number = 8
    let total = 1

    for(i=1; i<=number; i++){
        total *= i
    }
    
    console.log(`O fatorial de ${number} é ${total}`)
}

factorial()