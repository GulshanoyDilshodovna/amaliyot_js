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
// const user = {
//     name: 'Gulshanoy',
//     age: 22,
//     married: false,
//     email: 'gulshanoydilshodovna@gmail.com',
//     location: 'Fergana',
//     language: ['uzbek', 'russian', 'english'],
//     login: function(){
//         console.log(`Hurmatli ${user.name}, siz bu saytga muvaffaqqiyatli kirdingiz! `);
//     },
//     logout: function(){
//         console.log(`Hurmatli ${user.name}, siz bu saytdan muvaffaqqiyatli chiqdingiz `);
//     }
// }
// console.log(user.logout())

// 3-amaliy mashg`ulot (21.07.2022)
//1-task for orqali
// let massiv = [[false, true], [1,2], 99, 'Gulshanoy']
// for(i=0; i<massiv.length; i++){
//     if(typeof massiv[i] == 'string'){
//         console.log(i);
//     }
// }
//1-task forEach orqali
// let massiv = [[false, true], [1,2], 99, 'Gulshanoy']
// massiv.forEach((item, i)=>{
//     if(typeof item == 'string'){
//         console.log(i);
//     }
// })
//2-task
// let data = [[12,4,5], true, 76, [3,7,12], false, 'Gulshanoy']
// let newData = []
// data.forEach((item)=>{
//     let key = Array.isArray(item)
//     if(key){
//       item.forEach((nbr)=>{
//         newData.push(nbr)
//       })
//     }
// })
// console.log(newData);
// 3-task
// const data = [true, false, NaN, undefined, 'false', 0, 12, '', -0, null]
// let newData  = []
// data.forEach((item)=>{
//     if(!item){
//        newData.push(item)
//     }
// })
// console.log(newData);
//4-task
// let word = 'salom'
// let splitWord = word.split("").reverse()
// let newWord = ''
// splitWord.forEach((item)=>{
//     newWord+=item
// })
// console.log(newWord);
//5-task
// let newData = ''
// let data = prompt("Biror nima deb yozing: ")
// let splitData = data.split(' ')
// splitData.forEach((item)=>{
//    let okData = item.charAt().toLowerCase() + item.slice(1).toUpperCase()
//    newData+=' '+okData
// })
// console.log(newData);
//6-task
// const nbrs = [12, 3, -822, false, undefined, Infinity, null, 7, 'men', undefined]
// let total = 0
// nbrs.forEach((n)=>{
//     if(n>0.0 && Math.floor(n)===n && n!==Infinity){
//         total+=n
//     }
// })
// console.log(total);
//7-task
// let data = prompt("Biror so'z kiriting: ");
// let count = 0;
// splitData = data.split("");
// splitData.forEach((item, i) => {
//   if (item == "a" || item == 'A) {
//     count++;
//   }
// });
// console.log(count);
//8-task
// let data = [12, 23, null, false, 'men', true, undefined]
// let typeOfData = []
// data.forEach((type)=>{
//     typeOfData.push(typeof type)
// })
// console.log(typeOfData);
//9-task 1-path
// let data = 'berilgan text'
// let count = 0
// splitData = data.split('')
// splitData.forEach((item, i)=>{
//     count++
// })
// console.log(count)
//9-task 2-path
// let word = 'berilgan matn'
// console.log(word.lastIndexOf(word.slice(-1))+1)
//10-task
// let nbrs = [1,4,8,23]
// let newNbrs = []
// nbrs.forEach((nbr, i)=>{
//     newNbrs.push(nbr+i)
// })
// console.log(newNbrs);
//11-task
// let count = 0
// for(let i=1; i<=10; i++){
//     count+=i
// }
// console.log(count)
//12-task
// let result = []
// let n = +prompt("Biror natural son kiriting: ")
// for(let i =1 ; i<=10 ; i++){
//     result.push(n*i+1)
// }
// console.log(result);
//13-task
// let array = [2,84,65,1234,55]
// let newArray = []
// array.forEach((nbr)=>{
// newArray.push(-1*nbr)
// })
// console.log(newArray);
//14-task
// let result = []
// const fizzBuzz = function(nbr){
//     for(let i=1; i<=nbr; i++){
//         if(i%3==0 && i%5==0){
//            result.push('FizzBuzz')
//         }else if(i%3==0){
//             result.push('Fizz')
//         }else if(i%5==0){
//             result.push('Buzz')
//         }else{
//             result.push(i);
//         }
//     }
// }
// fizzBuzz(25)
// console.log(result);
//15-task
// let person ={
//     name: 'Gulshanoy',
//     lastName: 'Shokirova',
//     age: 22,
//     job: 'developer',
//     isMarried: false,
//     location: 'Fergana',
//     study: 'FSU',
//     about: function(){
//         return `    Assalomu alaykum, men ${this.name} ${this.lastName} ${this.age} yoshdaman. ${this.location}danman, ${this.job} bo'lib faoliyat yuritaman, hozirda ${this.study}da o'qiyman. ${this.isMarried ? 'Turmushga chiqganman' : 'Turmushga chiqmaganman'}`
//     }
// }
// console.log(person.about());


// --------SELECTORS ------------//
// let paragraphs = document.querySelectorAll('p')
// paragraphs.forEach((paragraph)=>{
//     if(paragraph.textContent.includes("error")){
//         paragraph.classList.add('error')
//     }else if(paragraph.textContent.includes("success")){
//         paragraph.classList.add('success')
//     }else{
//         paragraph.classList.add('dark')
//     }
// })
// HTMLCollection ni Array ga o'tkazish va biror div ichidagi farzandlarini ushlash
// let div  = document.querySelector('div')
// Array.from(div.children).forEach((child)=>{
//     child.classList.add('children_style')
// })

// let items = document.querySelectorAll('li')
// items.forEach((item)=>{
//     item.addEventListener('click', (e)=>{
//         e.target.style.textDecoration = 'line-through'
//         e.target.style.opacity = '0.6'
//         let text = item.textContent
//         console.log(text);
//     })
// })

const showBtn = document.querySelector('#show__btn')
const    closeBtn = document.querySelector('.close__btn')
const    modal = document.querySelector('#modal')
const   overlay = document.querySelector('#overlay') 
// ADD CLASSLIST HIDE
const addHide = function(){
    overlay.classList.add('hide')
    modal.classList.add('hide')
}
// ADD CLASSLIST REMOVE
const addRemove = function(){
    overlay.classList.remove('hide')
    modal.classList.remove('hide')
}
showBtn.addEventListener('click', addRemove)
closeBtn.addEventListener('click', addHide)
overlay.addEventListener('click', addHide)
document.addEventListener('keydown',(e)=>{
    if(e.key == 'Escape'){
        addHide()
    }
})