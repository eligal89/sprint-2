'use strict'

var gElCanvas
var gCtx
gElCanvas = document.querySelector('#my-canvas')
gCtx = gElCanvas.getContext('2d')






function renderMeme() {
    resizeCanvas()
    const{selectedImgId} = getMeme()
    drawImg(selectedImgId)

    const meme = getMeme()
    console.log(meme);
    
    if (meme.lines.length === 0) return
    
    const [{size, txt, align, color, strokeColor, x , y}] = meme.lines[selectedLineIdx];
    // console.log(size, txt, align, color, strokeColor , x , y );
    drawText(txt, strokeColor, color, x, y, size);










    // function drawText(size , x, y, , txt, font) {
    //     gCtx.fillStyle = size


    //     gCtx.lineWidth = 1
    //     gCtx.strokeStyle = 'brown'

    //     gCtx.font = `${size}px ${font}`

    //     gCtx.fillText(txt, x, y) // Draws (fills) a given text at the given (x, y) position.
    //     gCtx.strokeText(txt, x, y) // Draws (strokes) a given text at the given (x, y) position.
    // }

}


//                                   *********** USER PICKS ******************

//web side DONE
function onSetText() {
    const elInput = document.querySelector('.memeInput')
    // console.log(elInput.value);
    if (elInput.value === '') return
    setMemeText(elInput.value)
    document.querySelector('.memeInput').value = ''
    renderMeme()
}

//web side DONE
function onMakeSign(btn) {
    const btnSign = btn.textContent
    const sizeSign = (btnSign === "+") ? 1 : -1;
    changeFontSize(sizeSign)
    renderMeme()
}

//web side DONE
function onSetStrokeColor(ev) {
    const StrokeColor = ev.value
    setStrokeColor(StrokeColor)
    renderMeme()

}

// web side DONE
function onSetTxtColor(ev) {
    const textColor = ev.value
    setTextColor(textColor)
    renderMeme()
}

//delete the new line was add - web side DONE
function onDeleteLine() {
    deleteText()
    renderMeme()
}

// this funtion will mot the text on the X line - web side DONE
 function onChangeHorizontalPos(position){
    setHorizontalTextPos(position.textContent)
    renderMeme()
 }

function onchangeVerticalPos (verPosition) {
        moveText(verPosition.textContent)
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
    gCtx.font = `${fontSize}px Arial`
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}


function onSelectLine() {
    setLinePlace()
    renderMeme()
}



// FUNCTIONS THAT I NEED TO BUILD
// function addLine() {
//     const { place } = getMeme()
//     console.log(place);
//     // let counterUp = 150
//     // let counterDown = 450
// }

// function onDeleteLine() {
//     deleteText()
// }












// function onTxtMove (btn){
//     var btnSign = btn.textContent
//     console.log(btnSign);

//      const movement = (btnSign === "UP") ? 10 : -10;
//      movement

//     // changeFontSize (sizeSign)
//     // renderMeme()

// }

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



