class Votes {
    constructor(total, valid, blank, vnull){
        this.total = total
        this.valid = valid
        this.blank = blank
        this.vnull = vnull
    }

    validPercentage(){
        let countValid = this.valid/this.total
        console.log(`Votos válidos têm o percentual de: ${countValid}`)
    }

    blankPercentage(){
        let countBlank = this.blank/this.total
        console.log(`Votos em branco têm o percentual de: ${countBlank}`)
    }

    nullPercentage(){
        let countNull = this.vnull/this.total
        console.log(`Votos nulos têm o percentual de: ${countNull}`)
    }
}

const Count = new Votes(1000, 800, 150, 50)

Count.validPercentage()
Count.blankPercentage()
Count.nullPercentage()

