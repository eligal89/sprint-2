'use strict'



var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 } // not yet

var gLinePlace 
var selectedLineIdx = -1

//                                         **********************   MEME MODAL

var gMeme = {
    selectedImgId: '',
    lines: []
}

//                              *************** returns to meme from service to controller
function getMeme() {
    return gMeme
}

//                              ********** functions that gets the vlas from the USER CONTROLER => change gMeme
function getClickedMeme(memeId) {
    gMeme.selectedImgId = memeId
}

function setTextColor(textColor) {
    gMeme.lines[selectedLineIdx].color = textColor
}

function setStrokeColor(strokeColor) {
    gMeme.lines[selectedLineIdx].borderColor = strokeColor
    // console.log('gMeme', gMeme);
}

function setMemeText(text) {
    console.log(text);
    gLinePlace = 1
    selectedLineIdx++
    // console.log(gLinePlace);

     gMeme.lines[selectedLineIdx] = {
        size: 30,
        txt: text,
        color: 'white',
        strokeColor: 'black',
        align: 'center',
        x: 300,
        y: (gLinePlace === 1 ? 150 : 450)
    }
    // console.log(gMeme);

    //gMeme.place === 1 ? gMeme.lines[0].txt1 = text : gMeme.lines[0].txt2 = text
}

function setLinePlace() {
    // console.log('gLinePlace,', gLinePlace);
    gLinePlace = -gLinePlace
    gMeme.lines[selectedLineIdx].y = gLinePlace === 1 ? 150 : 450;
    // console.log('gMeme', gMeme);
}

//delete the new line was add - on modal
function deleteText() {
    if (selectedLineIdx < 0) return
    gMeme.lines.splice(selectedLineIdx, 1)
    selectedLineIdx--
    // console.log(gMeme);
}

// this function changes the palce of the text on x line - MODAL - DONE
function setHorizontalTextPos(pos) {
    // console.log(pos);
    switch (pos) {
        case 'Left': {
            gMeme.lines[selectedLineIdx].x = 150
            break
        }
        case 'Center': {
            gMeme.lines[selectedLineIdx].x = 300
            break
        }
        case 'Right': {
            gMeme.lines[selectedLineIdx].x = 450
            break
        }
    }
}

//working
function changeFontSize(sign) {
    const { lines} = gMeme;
    lines[selectedLineIdx].size += sign;
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function moveText(direction){
    const y = gMeme.lines[selectedLineIdx].y
    gMeme.lines[selectedLineIdx].y = direction === 'Up' ? Math.max(y - 10, 20) : Math.min(y + 10, 580)
}

function setEmoji (emoji) {

    console.log(emoji);
    gLinePlace = 1
    selectedLineIdx++
    // console.log(gLinePlace);

     gMeme.lines[selectedLineIdx] = {
        size: 30,
        txt: emoji,
        x: 300,
        y: 150 //(gLinePlace === 1 ? 150 : 450)
    }
    return
}


function clearCanvas() {
 gMeme.lines.length = 0
 gMeme.lines.length = null
}
 
