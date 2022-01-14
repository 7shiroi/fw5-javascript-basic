// var angka = 1 // NUmber
// var angka = '1' //String

// /*
// var = redefineable, mutable, global
// let = not redefineable, mutable, under scope
// const = not redefineable, unmutable, underscope
// */

// console.log(typeof angka)

// // short circuit variable logic (baca dari kiri ke kanan, dimana value tidak false maka value itu akan digunakan)

// // const x = 0 || "" || "Kosong"
// const x = 20 && 10 || "text"
// console.log(x)

// if (1 != '1'){
//     console.log("true")
// }else{
//     console.log("false")
// }

// // template literal string
// let nama = "awaw"

// const a = 5

// const sapa = `Halo ${nama}!`
// const test = `Halo ${a*5}!`

// console.log(test)

// // template literal array
// const hobby = ['swimming', 'reading']
// const newHobby = [...hobby, 'singing', 'gaming']

// console.log(newHobby)

// destructing object or array

const student = {
    firstName: 'ui',
    lastName: 'oi',
    country: 'mo'
}

const {firstName, lastName, country: asal, hobby} = student

console.log(asal)