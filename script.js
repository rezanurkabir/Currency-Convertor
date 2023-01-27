// Currency Convertor 
let amount = prompt('Put required Amount')
let currency = prompt('Input (dollar/pound/euro) currency Name')

if(amount == '' || currency == ''){
    alert('all fields are required')
} else{
     if( currency == 'dollar'){
    console.log(` ${amount}  ${currency} = ${amount*100} BDT `)
}
    else if( currency == 'pound'){
    console.log(` ${amount}  ${currency} = ${amount*115} BDT `)
    }
    
    else if( currency == 'euro'){
        console.log(` ${amount}  ${currency} = ${amount*98} BDT `)
        }
}