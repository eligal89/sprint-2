'use strict'



var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 } // not yet

var gLinePlace 
var selectedLineIdx = -1


var gMeme = {
    selectedImgId: '',
    lines: []
}

                    
function getMeme() {
    return gMeme
}

                        
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
    // console.log(text);
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

}

function setLinePlace() {
    // console.log('gLinePlace,', gLinePlace);
    gLinePlace = -gLinePlace
    gMeme.lines[selectedLineIdx].y = gLinePlace === 1 ? 150 : 450;
    // console.log('gMeme', gMeme);
}

function deleteText() {
    if (selectedLineIdx < 0) return
    gMeme.lines.splice(selectedLineIdx, 1)
    selectedLineIdx--
    // console.log(gMeme);
}

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

function changeFontSize(sign) {
    const { lines} = gMeme;
    lines[selectedLineIdx].size += sign;
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function moveText(direction){
    console.log(direction);
    
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

function SetRandomPlace (text){
    selectedLineIdx++
    gMeme.lines[selectedLineIdx] = {
        size: 30,
        txt: text,
        ...{ x: getRandomIntInclusive(20, 580), y: getRandomIntInclusive(20, 580) }
    }
    return
}

function clearCanvas() {
 gMeme.lines.length = 0
 gMeme.lines.length = null
}
 
function setEdit() {
    selectedLineIdx --
    if (selectedLineIdx<0) selectedLineIdx = gMeme.lines.length
    console.log(selectedLineIdx);
    
}

function setInputChange (txt) {
    let someText
    console.log(someText);
    
   return someText= {
        size: 30,
        txt,
        color: 'white',
        strokeColor: 'black',
        align: 'center',
        x: 300,
        y: 150
    } 
}