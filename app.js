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
// let age = prompt("Yoshingizni kiriting: ")
// let name = prompt("Ismingizni kiriting: ")
// let newName = name.charAt().toUpperCase()+name.slice(1).toLowerCase()
// let result = `Hurmatli ${newName}, siz ${2022-age} - yilda tug'ilgansiz. Siz shu paytgacha ${12*age} oy, ${52*age} hafta, ${365*age} kun, ${365*24*age} soat, ${365*24*60*age} minut va ${365*24*60*60*age} soniya yashadingiz! ;`
// console.log(result);

// 2-task
// let names = ["Gulbahor", 'Gulasal', 'Gulshanoy']
// let requested_name = prompt("Biror ism kiriting: ")
//     if(names.includes(requested_name)){
//         console.log(`So'ralgan ism bor`);
//     }else{
//         console.log(`So'ralgan ism yo'q`);
//     } 
    
//3-task
// let names = ['Gulbahor', 'Gulsanam', 'Gulshanoy']
// for(let i=1; i<=names.length; i++){
//     let result = names[i]+'xon'
//     console.log(result);
// }


//4-task 
// let viloyat_nomi = prompt("Viloyat nomini kiriting: ")
// switch (viloyat_nomi){
//     case "Fergana": console.log(`Fergana aholi soni : 2.2 mln `); break;
//     case "Andijon": console.log(`Andijon aholi soni : 2 mln `); break;
//     case "Namangan": console.log(`Namangan  aholi soni : 1.8 mln `); break;
//     default: console.log(`Siz so'ragan viloyat aholi sonini men bilmayman `);
// }


//5-task
// const meyor = 20
// let parol = prompt("Biror nima deb yozing: ")
// if(parol.length < 20){
//     alert(`Yana biror narsa yozing, ${ 20 - parol.length} ta belgi yozishingiz mumkin`)
// }else if (parol.length>20){
//     alert(`Siz ko'p belgi kiritdingiz!!!!  ${parol.length - 20} ta belgini o'chirishingiz kerak.`)
// }else
//     {
//     alert(`Siz yetralicha belgi kiritdingiz`)
// }

//FUNCTION 
// function decloration
// function say(name){
//     console.log(`Good morning, ${name}`);
// }
// say('Gulshanoy')

//object
const user = {
    name: 'Gulshanoy',
    age: 22,
    married: false,
    email: 'gulshanoydilshodovna@gmail.com',
    location: 'Fergana',
    language: ['uzbek', 'russian', 'english'],
    login: function(){
        console.log(`Hurmatli ${user.name}, siz bu saytga muvaffaqqiyatli kirdingiz! `);
    },
    logout: function(){
        console.log(`Hurmatli ${user.name}, siz bu saytdan muvaffaqqiyatli ciqdingiz `);
    }
}
console.log(user.logout())
