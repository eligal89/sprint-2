'use strict'

var gElCanvas
var gCtx

function init() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
}


function renderMeme() {
    // gElCanvas = document.querySelector('#my-canvas')
    // gCtx = gElCanvas.getContext('2d')
    const meme =  getMeme()
    console.log('meme', meme);
    
    const {selectedImgId } = getMeme()
    drawImg(selectedImgId)

    const [{size, txt, align, color}] = meme.lines;

    // drawText(x, y, size, color, txt, font)
    // drawText(x, y, size, color, txt, font)

    // function drawText(size , x, y, , txt, font) {
    //     gCtx.fillStyle = size


    //     gCtx.lineWidth = 1
    //     gCtx.strokeStyle = 'brown'
      
    //     gCtx.font = `${size}px ${font}`
        
    //     gCtx.fillText(txt, x, y) // Draws (fills) a given text at the given (x, y) position.
    //     gCtx.strokeText(txt, x, y) // Draws (strokes) a given text at the given (x, y) position.
    // }
    




}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  // Note: changing the canvas dimension this way clears the canvas
  gElCanvas.width = elContainer.offsetWidth
  // Unless needed, better keep height fixed.
  // gElCanvas.height = elContainer.offsetHeight
}


// *********** USER PICKS ******************
// function changeFontSize(ev) {
//     const fontSize = ev.value
//     console.log('ev', ev);
// }

function onSetStrokeColor(ev) {
    const StrokeColor = ev.value
    setStrokeColor (StrokeColor)
}

function onSetTxtColor(ev) {
    const textColor = ev.value
    setTextColor(textColor)
}



//******CANVAS FUNCTONS****************/
function drawImg(id) {
    let elImg = document.getElementById(id)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

