'use strict'

var gElCanvas
var gCtx


function renderMeme() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    const meme = getMeme()

    const{selectedImgId} = meme
    drawImg(selectedImgId)
    if (meme.lines.length === 0) return
    meme.lines.forEach(line => {
        drawText(line.txt, line.strokeColor, line.color, line.x, line.y, line.size);
    });
    
    // const {size, txt, align, color, strokeColor, x , y} = meme.lines
}


function onSetText() {
    const elInput = document.querySelector('.memeInput')
    console.log(elInput);
    if (elInput.value === '') return
    setMemeText(elInput.value)
    document.querySelector('.memeInput').value = ''
    renderMeme()
}

function onMakeSign(btn) {
    const btnSign = btn.id
    const sizeSign = (btnSign === "+") ? 1 : -1;
    changeFontSize(sizeSign)
    renderMeme()
}

function onSetStrokeColor(ev) {
    const StrokeColor = ev.value
    setStrokeColor(StrokeColor)
    renderMeme()

}

function onSetTxtColor(ev) {
    const textColor = ev.value
    setTextColor(textColor)
    renderMeme()
}


function onDeleteLine() {
    deleteText()
    renderMeme()
}

 function onChangeHorizontalPos(position){
    console.log(position.id);
    
    setHorizontalTextPos(position.id)
    renderMeme()
 }

function onchangeVerticalPos (verPosition) {
        moveText(verPosition.id)
        renderMeme()
// console.log('position.textContent', position.textContent);
}

function drawImg(id) {
    let elImg = document.getElementById(id)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(text, strokeColor, color, x, y, fontSize) {
    // console.log(text, strokeColor, color, x, y, fontSize);
  
    gCtx.lineWidth = 2
    gCtx.strokeStyle = color
    // gCtx.fillStyle = 'pink'
    gCtx.font = `${fontSize}px Impact`
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function onSelectLine() {
    setLinePlace()
    renderMeme()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Note: changing the canvas dimension this way clears the canvas
    gElCanvas.width = elContainer.offsetWidth
    // Unless needed, better keep height fixed.
    // gElCanvas.height = elContainer.offsetHeight
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        // console.log(encodedUploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    // Send a post req with the image to the server
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        // If the request is not done, we have no business here yet, so return
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        // if the response is not ok, show an error
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        // Same as
        // const url = XHR.responseText

        // If the response is ok, call the onSuccess callback function, 
        // that will create the link to facebook using the url we got
        console.log('Got back live url:', url)
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
}

function onSetEmoji (emojiSymbel){
const emoji = emojiSymbel
    setEmoji(emoji)
     renderMeme()
}

function onRandomPlace (){
    console.log('');
    
    const elInput = document.querySelector('.memeInput')
    if (elInput.value === '') return
    SetRandomPlace(elInput.value)
    document.querySelector('.memeInput').value = ''
    renderMeme()
}

// function something(){
//     const elInput = document.querySelector('.memeInput')
//     console.log(elInput);
//     if (elInput.value === '') return
//     setMemeText(elInput.value)
//     renderMeme()
// }


function onEditLine () {
    setEdit()
}


function onInputChange(txt){
     let input =setInputChange(txt)
    console.log(input);
    drawText(input.txt, input.strokeColor, input.color, input.x, input.y, input.size);
    
    
    }
    