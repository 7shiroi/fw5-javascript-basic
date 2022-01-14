// const printSegitiga = "Enam"
const printSegitiga = 5

if (typeof printSegitiga == 'number'){
    for (i = printSegitiga; i > 0; i--){
        let x = ""
        for (j = 1; j <= i;j++){
            x += j
            if (j != i){
                x += ' '
            }
        }
        console.log(x)
    }
}else{
    console.log("Data harus number")
}