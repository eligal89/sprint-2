'use strict'


//the function the onlode first => puts all the imgs as a buttons on the web page
function renderMems(){
    let imgs = getImgs ()
    var strHTML= ''
    strHTML= imgs.map(function(img){
    return strHTML = `<button class="gallery-imgs"></button> <img OnClick="onImgSelect(this)" id="${img.id}" src="${img.url}"></button>`
    }) 

    let elMemeImgs = document.querySelector('.meme-continer')
    elMemeImgs.innerHTML = strHTML
}

//this functions gets active when the user press an img
function onImgSelect(ev){
console.log(ev);
const imgId = ev.id
console.log(imgId);
}
