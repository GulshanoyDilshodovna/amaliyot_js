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

// ----------MODAL YARATISH -----------
// const showBtn = document.querySelector('#show__btn')
// const    closeBtn = document.querySelector('.close__btn')
// const    modal = document.querySelector('#modal')
// const   overlay = document.querySelector('#overlay')
// // ADD CLASSLIST HIDE
// const addHide = function(){
//     overlay.classList.add('hide')
//     modal.classList.add('hide')
// }
// // ADD CLASSLIST REMOVE
// const addRemove = function(){
//     overlay.classList.remove('hide')
//     modal.classList.remove('hide')
// }
// showBtn.addEventListener('click', addRemove)
// closeBtn.addEventListener('click', addHide)
// overlay.addEventListener('click', addHide)
// document.addEventListener('keydown',(e)=>{
//     if(e.key == 'Escape'){
//         addHide()
//     }
// })

//      ------------------  FORM UCHUN || REGEX  -------------------------
// const form = document.querySelector('#form')
// const message = document.querySelector('#message')
// const regEX = /^[a-zA-Z0-9]{8,20}$/
// //regEX
// form.addEventListener('submit', (e)=>{
//  e.preventDefault()
//  let inputValue = form.username.value
//  if(regEX.test(inputValue)){
//     message.innerHTML = `Username muvaffaqqiyatli kiritildi!!!`
//     message.classList.add('message')
//  }else{
//     message.textContent = `Kiritlgan ma'lumotlarni qayta tekshiring. Faqat lotin alifbosidagi katta-kichik harflar va arab raqamlaridan foydalaning!`
//     message.classList.add('message')
//     setInterval(() => {
//         message.classList.remove('message')
//         message.innerHTML = ''
//     }, 4000);
//  }
// })
// //live feedback
// form.addEventListener('keyup', (e)=>{
//     if(regEX.test(e.target.value)){
//         form.username.setAttribute('class','success')
//     }else{
//         form.username.setAttribute('class','error')
//     }
// })

//-------------------   KEY CODE -------------------//
// const wrapper = document.getElementById('wrapper')
// window.addEventListener('keydown', (e)=>{
//     wrapper.innerHTML = `
//     <div class="key">
//     ${e.key == ' ' ? 'Space' :  e.key }
//     <small>event.Key</small>
//     </div>
//     <div class="key">
//     ${e.keyCode}
//     <small>event.keyCode</small>
//     </div>
//     <div class="key">
//     ${e.code}
//         <small>event.code</small>
//     </div>
//     `
// })

/*
//--------------------Random Gradient Color--------------------------//
const randomBtn = document.querySelector('.wrapper')
const colorText = document.querySelector('.color__text')
const body = document.querySelector('body')
const values = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
//random color function
function getGradien(){
    let color = '#'
    for(let i=0; i<6; i++){
        let randomNbr = Math.trunc(Math.random()*values.length)
        color+=values[randomNbr]
    }
    return color
}
//set color two body
function setGradient(){
    let color1 = getGradien()
    let color2 = getGradien()
    let color3 = getGradien()
    let deg = Math.trunc(Math.random()*360 + 1)
    let bg = `linear-gradient(${deg}deg, ${color1},${color2}, ${color3})`
    body.style.backgroundImage = bg
    colorText.innerHTML = bg
}
setGradient()
randomBtn.addEventListener('click',setGradient)
*/

/*
//==================ARRAY======================//
const movies = [
    {name: 'Avatar 3D', year: 2008, rating:9},
    {name: 'Titanik 4D', year: 1997, rating:7},
    {name: 'Forsaj 3D', year: 2020, rating:4},
    {name: 'Avengers', year: 2012, rating:6},
]
//forEach orqali
let newMovies = []
movies.movies.forEach(movie => {
    if(movie.year>2010){
        newMovies.push(movie)
    }
});
console.log(newMovies);

//filter methodi orqali
const filterMovies = movies.filter((movie)=>{
    return movie.year>2010
})
console.log(filterMovies);

//map method
nbrs = [1,2,3,4,5]
let mapNbrs = nbrs.map((nbr)=>{
    return nbr ** 2
})
console.log(mapNbrs);

// sort method
const names = ['Gulshanoy', 'Oyxon', 'Asalxon', 'Lolaxon']
const sortedNames = names.sort()
console.log(sortedNames);

const nbrs = [1,8,75,9,7]
const sortedNbrs = nbrs.sort((a,b)=>{
    return a-b
    //return b-a kmayish tartibida 
})
console.log(sortedNbrs);
*/

/*
//TERNARY OPERATION
const age = +prompt('Yoshingizni kiriting: ',18)
//if else orqali
if(age<18){
    alert(`Siz hali voyaga yetmagansiz`);
}else{
    alert(`Siz voyaga yetgansiz`);
}
// ternary operation
age<18 ? alert(`Siz hali voyaga yetmagansiz`):alert(`Siz voyaga yetgansiz`)
*/
/*
// && 
const words = [1,2,3].length
words && console.log(`Hello, world`);
*/

/*=======================LOCALSTORAGE ========================= */
//setItem
/*const name = 'Gulshanoy'
let age = 22
localStorage.setItem('name', name)
localStorage.setItem('age', age)
//getItem
console.log(localStorage.getItem('age'))
//clear
localStorage.clear()*/

/*let names = ["Gulshanoy", "Oyxon", 'Lolaxon']
localStorage.setItem('names', JSON.stringify(names))
let getArray = JSON.parse(localStorage.getItem('names'))
console.log(getArray);*/

// let names = JSON.parse(localStorage.getItem('names')) ?  JSON.parse(localStorage.getItem('names')) : []

// if(names.length>0){
//     names.forEach((name)=>{
//         console.log(name);
//     })
// }else{
//     console.log(`Hech qanday ism yo'q`);
// }

//====================SETTIMEOUT && SETINTERVAL============================//

//setTimeout(function, time)
// setTimeout(()=>{
//     console.log(4);
// },3000) //  3 sekunddan keyin function ishlaydi

//setInterval(function, time)
// let a = 0
// const setTime =  setInterval(() => {
//     a++
//     console.log(a);
// }, 1000);
// setTimeout(()=>{
//     clearInterval(setTime) //intervalni to'xtatadi
// },5000)

//=========COUNTER || SETTIMEOUT() AND SETINTERVAL()==============//
// const countEl =document.getElementById('nbr'),
//     startBtn = document.querySelector('.start__btn'),
//     pauseBtn = document.querySelector('.pause__btn');
// let count  = true,
//     timeInterval,
//     counter = 0;
// function start(){
//     if(count){
//         timeInterval = setInterval(() => {
//         counter++
//         countEl.textContent = counter
//         }, 1000);
//         count = !count
//         countEl.style.color = 'green'
//     }
// }
// function pause(){
//     clearInterval(timeInterval)
//     count = !count
// }
// startBtn.addEventListener('click', start)
// pauseBtn.addEventListener('click', pause)

//===============PING PONG GAME=================//
// const score1El = document.getElementById('score1'),
//     score2El = document.getElementById('score2'),
//     selectEl = document.getElementById('select'),
//     player1Btn = document.getElementById('player-one__btn'),
//     player2Btn = document.getElementById('player-two__btn'),
//     resetBtn = document.getElementById('reset__btn');
// let score1 = 0,
// score2 = 0,
// play = true,
// selectValue = selectEl.value;
// // function reset
// function reset(){
//     score1 = score2 =0
//     score1El.textContent = score2El.textContent = 0
//     score1El.style.color = score2El.style.color = 'aqua'
//     play= true
// }
// //function player 1 listener
// function player1Listener(){
//     if(play){
//         score1++
//         score1El.textContent = score1
//         if(score1 == selectValue){
//             score1El.style.color = 'green'
//             score2El.style.color = 'red'
//             play = false
//         }
//     }
// }
// //function player 2 listener
// function player2Listener(){
//     if(play){
//         score2++
//         score2El.textContent = score2
//         if(score2 == selectValue){
//             score1El.style.color = 'red'
//             score2El.style.color = 'green'
//             play = false
//         }
//     }
// }
// //add event listner
// selectEl.addEventListener('change', ()=>{
//     selectValue = selectEl.value
//     reset()
// })
// resetBtn.addEventListener('click', reset)
// player1Btn.addEventListener('click',player1Listener)
// player2Btn.addEventListener('click',player2Listener)





//==========NOW DATE || TIME || VAQT ANIQLAGICH===========//
// function timeShow() {
//   const day = document.getElementById("day"),
//     month = document.getElementById("month"),
//     year = document.getElementById("year"),
//     hours = document.getElementById("hours"),
//     minute = document.getElementById("minute"),
//     second = document.getElementById("second"),
//     now = new Date(),
//     months = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];
//   day.textContent = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
//   month.textContent = months[now.getMonth()];
//   year.textContent = now.getFullYear();
//   hours.textContent =
//     now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
//   minute.textContent =
//     now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
//   second.textContent =
//     now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
// }
// setInterval(() => {
//     timeShow()
// }, 1000);






//================ROLL DICE GAME ==============//
//buttons
// const resetBtn = document.getElementById("reset__btn"),
//   diceBtn = document.getElementById("dice__btn"),
//   holdBtn = document.getElementById("hold__btn"),
//   //dice image
//   diceImg = document.getElementById("img");
// diceImg.style.display = "none";
// //variables
// let currentScore = 0,
//   active = 0,
//   gameOver = true,
//   score = [0, 0];

// //switch player function
// const switchPlayer = () => {
//   currentScore = 0;
//   document.getElementById(`account${active}`).textContent = 0;
//   active = active === 0 ? 1 : 0;
//   document.querySelector(".player0").classList.toggle("player__active");
//   document.querySelector(".player1").classList.toggle("player__active");
// };
// //ROLL DICE BUTTON ADDEVENTLISTENER CLICK
// diceBtn.addEventListener("click", () => {
//   if (gameOver) {
//     diceImg.style.display = "block";
//     const randomNbr = Math.floor(Math.random() * 6 + 1);
//     diceImg.src = `./images/dice-${randomNbr}.png`;
//     if (randomNbr !== 1) {
//       currentScore += randomNbr;
//       document.getElementById(`account${active}`).textContent = currentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });
// //HOLD BUTTON ADDEVENTLISTENER CLICK
// holdBtn.addEventListener("click", () => {
//   if (gameOver) {
//     score[active] += currentScore;
//     document.getElementById(`score${active}`).textContent = score[active];
//     if (score[active] >= 20) {
//         document.querySelector(`.player${active}`).classList.add('winner')
//         gameOver = false;
//     } else {
//       switchPlayer();
//     }
//   }
// });
// //NEW GAME/RESET  BUTTON ADDEVENTLISTENER CLICK
// resetBtn.addEventListener('click', ()=>{
//   currentScore = 0
//   active = 0
//   gameOver = true
//   score = [0, 0]
//   document.getElementById(`account0`).textContent = 0;
//   document.getElementById(`account1`).textContent = 0;
//   document.getElementById(`score0`).textContent = 0;
//   document.getElementById(`score1`).textContent = 0;
//   document.querySelector('.player0').classList.remove('winner')
//   document.querySelector(`.player1`).classList.remove('winner')
//   document.querySelector(`.player0`).classList.add('player__active')
//   document.querySelector(`.player1`).classList.remove('player__active')
// })







//============CALCULATOR============//
// const screen = document.getElementById('screen')
// const equal = document.querySelector('.btn-equal')
// const clear = document.querySelector('.btn-clear')
// const buttons = document.querySelectorAll('.btn')

// //BUTTONS CLICK
// buttons.forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         let value = e.target.dataset.num
//         screen.value +=value
//     })
// })

// //EQUAL BUTTON CLICK
// equal.addEventListener('click', (e)=>{
//     if(screen.value === ''){
//        screen.value  = "please";
//     }else{
//        let answer = eval(screen.value);
//         screen.value = answer
//     }
// })

// //CLEAR BUTTON CLICK
// clear.addEventListener('click', (e)=>{
//     screen.value = ''
// })








//=======CREATE PRODUCT SEARCH=======//  !!!!!ISHLAMADI!!!!!!
// const search = ()=>{
//     const searchBox = document.getElementById('search').value.toUpperCase()
//     const storeItems = document.getElementById('product-lis')
//     const product = document.querySelectorAll('.product-item')
//     const productName = document.getElementsByTagName('h2')

//     for(let i=0; i<productName.length; i++){
//         let match = product[i].getElementsByTagName('h2')[0]

//         if(match){
//             let textValue = match.innerHTML || match.textContent

//             if(textValue.toUpperCase().indexOf(searchBox)>-1){
//                 product[i].style.display = ''
//             }else{
//                 product[i].style.display = 'none'
//             }
//         }

//     }
// }







//==========VANILLA JAVASCRIPT SMOOTH SCROLL TUTORIAL=============//
// function smoothScroll(target, duration){
//     var target = document.querySelector(target)
//     var targetPosition = target.getBoundingClientRect().top
//     var startPosition = window.pageYOffset()
//     var distance = targetPosition-startPosition
    
//     console.log(targetPosition);
// }

// smoothScroll('#link1', 1000)







//=======Simple Countdown Timer with JavaScript======//
// let startMinute= 10
// let time = startMinute*60 //second value
// const countdownEl =  document.getElementById('countdown')
// let setIntevalName = setInterval(updateCountdown, 1000)

// function updateCountdown(){
//     let minute = Math.floor(time/60)
//     let second = time%60
//     second = second<10? '0'+second : second
//     minute = minute<10? '0'+minute : minute
//     countdownEl.innerHTML = `${minute}:${second}`
//     time--
//     if(second == 0 && minute == 0){
//         clearInterval(setIntevalName)
//     }
// }





//=======MUSIC PLAYER=======//
//consts - o`zgarmaslar
// const audioContainer = document.getElementById('audio-container'),
//     playBtn  = document.getElementById('play'),
//     prevBtn  = document.getElementById('prev'),
//     nextBtn  = document.getElementById('next'),
//     title  = document.getElementById('title'),
//     audio = document.getElementById('audio'),
//     progressContainer = document.getElementById('progress-container'),
//     progress = document.getElementById('progress'),
//     cover = document.getElementById('cover'),
//     songs = [`Akbarali Ochilov Kelasanmi`,`Mustafo Qirolicham`, `Nodir Zoitov Umrim Seniki`, `Yulduz Usmonova Xasta bo'lma`];
// //let - o`zgaruvchiar
// let songIndex = 0

// //functions - funksiyalar
// function loadSong(song){
//     title.innerHTML = song
//     audio.src = `./music/${song}.mp3`
//     cover.src = `./music_img/${song}.jpg`

// }
// loadSong(songs[songIndex])

// //play song function
// function playSong(){
//     audioContainer.classList.add('play')
//     playBtn.querySelector('i.fas').classList.remove('fa-play')
//     playBtn.querySelector('i.fas').classList.add('fa-pause')

//     audio.play()
// }
// //pause song function
// function pauseSong(){
//     audioContainer.classList.remove('play')
//     playBtn.querySelector('i.fas').classList.add('fa-play')
//     playBtn.querySelector('i.fas').classList.remove('fa-pause')

//     audio.pause()
// }
// //prev song function
// function prevSong(){
//     songIndex--
    
//     if(songIndex<0){
//         songIndex = songs.length - 1
//     }
//     loadSong(songs[songIndex])
//     playSong()
// }
// //next song function
// function nextSong(){
//     songIndex++
    
//     if(songIndex>songs.length-1){
//         songIndex = 0
//     }
//     loadSong(songs[songIndex])
//     playSong()
// }
// // progress update function
// function progressUpdate(e){
//     const {duration, currentTime} = e.srcElement;
//     const progressPercent = (currentTime/duration)*100
//     progress.style.width = `${progressPercent}%`
// }
// // set progress function
// function setProgress(e){
//     const width = this.clientWidth
//     const clickX = e.offsetX
//     const duration = audio.duration
//     audio.currentTime = (clickX / width)*duration
// }

// // events
// playBtn.addEventListener('click',()=>{
//     let isPlaying = audioContainer.classList.contains('play')
//     if(isPlaying){
//         pauseSong()
//     }else playSong()
// })
// //prev song next song
// prevBtn.addEventListener('click', prevSong)
// nextBtn.addEventListener('click', nextSong)
// //update progress
// audio.addEventListener('timeupdate', progressUpdate)
// //
// progressContainer.addEventListener('click', setProgress)
// //
// audio.addEventListener('ended', nextSong)






//===========COLOR PICKER============//
const colorFunc = ()=>{
const colorPicker = document.getElementById('input-color').value
document.body.style.background = colorPicker
document.getElementById('input-text').value = colorPicker
}

const hexColor = document.getElementById('input-text')
const demo = document.getElementById('demo')
const copyFunc = ()=>{
    navigator.clipboard.writeText(hexColor.value)
    demo.innerHTML = 'Copied'
    demo.style.opacity = '1'
}