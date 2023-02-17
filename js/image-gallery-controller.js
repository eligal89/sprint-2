'use strict'

let elMemeEditor
let elMemeImgs
let imgs


//the function the onlode first => puts all the imgs as a buttons on the web page
function renderMemsImgs() {
    elMemeEditor = document.querySelector('.meme-editor')
    elMemeEditor.style.display = 'none'
    imgs = getImgs()
    let strHTML = ''
    strHTML = imgs.map(function (img) {
        return strHTML = `<button class="gallery-imgs"> <img OnClick="onImgSelect(this)" id="${img.id}" src="${img.url}"></button>
        `
    }) // forEach maybe?

    elMemeImgs = document.querySelector('.meme-continer')
    elMemeImgs.innerHTML = strHTML
}

//this functions gets active when the user press an img
function onImgSelect(ev) {
    // console.log(ev);
    const imgId = ev.id
    getClickedMeme(imgId)
    changeStyle()
    renderMeme()
}


// LETS THE USER TO SEE THE EDITOR => LAST FUNCTION NOW MEME FUNCS
function changeStyle() {
    elMemeImgs.style.display = 'none'
    elMemeEditor.style.display = 'flex'
}



// ****** GET RANDOM MEME BOTH RAND AND BUTTON
function onFlexClick() {
    imgs = getImgs()
    const rand = getRandomIntInclusive(1, 18)
    getClickedMeme(imgs[rand].id)
    renderMeme()
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}