// let ism = prompt("Ismingizni kiriting: ")
// let result = ism.charAt().toUpperCase()+ism.slice(1).toLowerCase()
// console.log(result)

//2-mashq for loopi
// let names = ['gulshanoy', 'gulbahor', 'gulasal']
// for(let i=0; i<names.length; i++){
//     let newNames=names[i].charAt().toUpperCase()+names[i].slice(1).toLowerCase()
//     console.log(newNames);
// }

// while loopi
// let i=0;
// while (i<8){
//     console.log(i);
//     i++
// }

//do whilw loopi
// let j=0
// do {
//     console.log(j)
//     j++
// }while(j<4)



//Amaliyot 2 19.07.2022

//1-task
let age = prompt("Yoshingizni kiriting: ")
let name = prompt("Ismingizni kiriting: ")
let newName = name.charAt().toUpperCase()+name.slice(1).toLowerCase()
let result = `Hurmatli ${newName}, siz ${2022-age} - yilda tug'ilgansiz. Siz shu paytgacha ${12*age} oy, ${52*age} hafta, ${365*age} kun, ${365*24*age} soat, ${365*24*60*age} minut va ${365*24*60*60*age} soniya yashadingiz! `
console.log(result);
