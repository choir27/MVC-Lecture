
document.querySelector('#right').addEventListener('click', goRight)
document.querySelector('#left').addEventListener('click', goLeft)

let slide = 0

function goRight(){
let arr = []
for(let i = 1; i<15; i++){
arr.push(`.slide${i}`)
}

if(slide !== 6 && slide !== 7 && slide < 7){
    for(let i = 1; i< 9;i++){
        document.querySelector(`.slide${i}`).classList.add('hidden')
    }
 document.querySelector(`.slide`).classList.remove('hidden')
 slide++
document.querySelector(`${arr[slide]}`).classList.remove('hidden')
addSelect()
}else if(slide === 6){
    document.querySelector('#left').classList.add('hidden')
    document.querySelector(`.folders`).classList.add('hidden')
    for(let i = 1; i< 9;i++){
        document.querySelector(`.slide${i}`).classList.add('hidden')
    }
slide++
document.querySelector(`${arr[slide]}`).classList.remove('hidden')
addSelect()
}else if(slide >= 7 && slide !== 13 && slide !== 12){
    for(let i = 7; i< 15;i++){
        document.querySelector(`.slide${i}`).classList.add('hidden')
    }
    console.log(slide)
    slide++
    document.querySelector(`${arr[slide]}`).classList.remove('hidden')

}else{
    document.querySelector('#right').classList.add('hidden')
    for(let i = 7; i< 15;i++){
        document.querySelector(`.slide${i}`).classList.add('hidden')
    }
    slide++
    document.querySelector(`${arr[slide]}`).classList.remove('hidden')
    document.querySelector('.audio').setAttribute('src','like.mp3')
}


}

function goLeft(){
    let arr = []
    for(let i = 1; i<9; i++){
    arr.push(`.slide${i}`)
    }
    
    if(slide !== 0 && slide !== 1){
     document.querySelector(`${arr[slide]}`).classList.add('hidden')
     document.querySelector(`.slide`).classList.remove('hidden')
     slide--
    document.querySelector(`${arr[slide]}`).classList.remove('hidden')
    addSelect()
    }else if(slide !==0 && slide === 1){
        document.querySelector(`${arr[slide]}`).classList.add('hidden')
        document.querySelector(`.slide`).classList.add('hidden')
        slide--
       document.querySelector(`${arr[slide]}`).classList.remove('hidden')
       addSelect()
    }
}


document.querySelector('#routerFolder').addEventListener('click', routerFolder)
document.querySelector('#controllerFolder').addEventListener('click', controllerFolder)
document.querySelector('#modelFolder').addEventListener('click', modelFolder)
document.querySelector('#viewFolder').addEventListener('click', viewFolder)

// 0: ".slide1"
// 1: ".slide2"
// 2: ".slide3"
// 3: ".slide4"
// 4: ".slide5"
// 5: ".slide6"
// 6: ".slide7"
// 7: ".slide8"
function routerFolder(){
    slide = 1
    document.querySelector('.slide2').classList.remove('hidden')
    document.querySelector('.slide4').classList.add('hidden')
    document.querySelector('.slide3').classList.add('hidden')
    document.querySelector('.slide5').classList.add('hidden')
    document.querySelector('.slide6').classList.add('hidden')
    document.querySelector('.slide7').classList.add('hidden')
    document.querySelector('.slide8').classList.add('hidden')
    document.querySelector('#routerFolder').classList.add('select')
    document.querySelector('#controllerFolder').classList.remove('select')
    document.querySelector('#modelFolder').classList.remove('select')
    document.querySelector('#viewFolder').classList.remove('select')
    document.querySelector('.routerh2').classList.add('select')
    document.querySelector('.controllerh2').classList.remove('select')
    document.querySelector('.modelh2').classList.remove('select')
    document.querySelector('.viewh2').classList.remove('select')

}
function controllerFolder(){
    slide = 2
    document.querySelector('.slide3').classList.remove('hidden')
    document.querySelector('.slide4').classList.add('hidden')
    document.querySelector('.slide5').classList.add('hidden')
    document.querySelector('.slide2').classList.add('hidden')
    document.querySelector('.slide6').classList.add('hidden')
    document.querySelector('.slide7').classList.add('hidden')
    document.querySelector('.slide8').classList.add('hidden')
    document.querySelector('#routerFolder').classList.remove('select')
    document.querySelector('#controllerFolder').classList.add('select')
    document.querySelector('#modelFolder').classList.remove('select')
    document.querySelector('#viewFolder').classList.remove('select')
    document.querySelector('.routerh2').classList.remove('select')
    document.querySelector('.controllerh2').classList.add('select')
    document.querySelector('.modelh2').classList.remove('select')
    document.querySelector('.viewh2').classList.remove('select')

}
function modelFolder(){
    slide = 3
    document.querySelector('.slide4').classList.remove('hidden')
    document.querySelector('.slide5').classList.add('hidden')
    document.querySelector('.slide3').classList.add('hidden')
    document.querySelector('.slide2').classList.add('hidden')
    document.querySelector('.slide6').classList.add('hidden')
    document.querySelector('.slide7').classList.add('hidden')
    document.querySelector('.slide8').classList.add('hidden')
    document.querySelector('#routerFolder').classList.remove('select')
    document.querySelector('#controllerFolder').classList.remove('select')
    document.querySelector('#modelFolder').classList.add('select')
    document.querySelector('#viewFolder').classList.remove('select')
    document.querySelector('.routerh2').classList.remove('select')
    document.querySelector('.controllerh2').classList.remove('select')
    document.querySelector('.modelh2').classList.add('select')
    document.querySelector('.viewh2').classList.remove('select')

}
function viewFolder(){
    slide = 4
    document.querySelector('.slide5').classList.remove('hidden')
    document.querySelector('.slide4').classList.add('hidden')
    document.querySelector('.slide3').classList.add('hidden')
    document.querySelector('.slide2').classList.add('hidden')
    document.querySelector('.slide6').classList.add('hidden')
    document.querySelector('.slide7').classList.add('hidden')
    document.querySelector('.slide8').classList.add('hidden')
    document.querySelector('#routerFolder').classList.remove('select')
    document.querySelector('#controllerFolder').classList.remove('select')
    document.querySelector('#modelFolder').classList.remove('select')
    document.querySelector('#viewFolder').classList.add('select')
    document.querySelector('.routerh2').classList.remove('select')
    document.querySelector('.controllerh2').classList.remove('select')
    document.querySelector('.modelh2').classList.remove('select')
    document.querySelector('.viewh2').classList.add('select')
}

function addSelect(){
let array2 = []
for(let i = 0; i< document.querySelector('.slide2').classList.length; i++){
    array2.push(document.querySelector('.slide2').classList[i])
}

if(!(array2.includes('hidden'))){
    document.querySelector('#routerFolder').classList.add('select')
    document.querySelector('#controllerFolder').classList.remove('select')
    document.querySelector('#modelFolder').classList.remove('select')
    document.querySelector('#viewFolder').classList.remove('select')
    document.querySelector('.routerh2').classList.add('select')
    document.querySelector('.controllerh2').classList.remove('select')
    document.querySelector('.modelh2').classList.remove('select')
    document.querySelector('.viewh2').classList.remove('select')
}

let array3 = []
for(let i = 0; i< document.querySelector('.slide3').classList.length; i++){
    array3.push(document.querySelector('.slide3').classList[i])
}

if(!(array3.includes('hidden'))){
    document.querySelector('#routerFolder').classList.remove('select')
    document.querySelector('#controllerFolder').classList.add('select')
    document.querySelector('#modelFolder').classList.remove('select')
    document.querySelector('#viewFolder').classList.remove('select')
    document.querySelector('.routerh2').classList.remove('select')
    document.querySelector('.controllerh2').classList.add('select')
    document.querySelector('.modelh2').classList.remove('select')
    document.querySelector('.viewh2').classList.remove('select')
}

let array4 = []
for(let i = 0; i< document.querySelector('.slide4').classList.length; i++){
    array4.push(document.querySelector('.slide4').classList[i])
}

if(!(array4.includes('hidden'))){
    document.querySelector('#routerFolder').classList.remove('select')
    document.querySelector('#controllerFolder').classList.remove('select')
    document.querySelector('#modelFolder').classList.add('select')
    document.querySelector('#viewFolder').classList.remove('select')
    document.querySelector('.routerh2').classList.remove('select')
    document.querySelector('.controllerh2').classList.remove('select')
    document.querySelector('.modelh2').classList.add('select')
    document.querySelector('.viewh2').classList.remove('select')
}

let array5 = []
for(let i = 0; i< document.querySelector('.slide5').classList.length; i++){
    array5.push(document.querySelector('.slide5').classList[i])
}

if(!(array5.includes('hidden'))){
    document.querySelector('#routerFolder').classList.remove('select')
    document.querySelector('#controllerFolder').classList.remove('select')
    document.querySelector('#modelFolder').classList.remove('select')
    document.querySelector('#viewFolder').classList.add('select')
    document.querySelector('.routerh2').classList.remove('select')
    document.querySelector('.controllerh2').classList.remove('select')
    document.querySelector('.modelh2').classList.remove('select')
    document.querySelector('.viewh2').classList.add('select')
}

}