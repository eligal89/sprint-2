'use strict'



var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 } // not yet


//                                         **********************   MEME MODAL

var gMeme = {
    selectedImgId: '',
    place: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt1: 'hey',
            txt2: 'hello',
            size: 20,
            align: 'left',
            color: 'white',
            strokeColor: 'black',
        }

    ]
}

function setLinePlace (){
    gMeme.place = -gMeme.place 
}


//                              *************** returns to meme from service to controller
function getMeme (){
    return gMeme
}


























//                              ********** functions that gets the vlas from the USER CONTROLER => change gMeme
function getClickedMeme(memeId) {
    gMeme.selectedImgId = memeId
}

function setTextColor (textColor){
    gMeme.lines[0].color = textColor
}

function setStrokeColor (strokeColor) {
gMeme.lines[0].borderColor = strokeColor
    console.log('gMeme', gMeme);
}

function setMemeText (text){
    console.log(text);
    gMeme.lines[0].txt = text
    console.log(gMeme);
    
}


function changeFontSize (sign) {
        const { lines } = gMeme;
        lines[0].size += sign;
}















function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}
















//                              ********** END OF functions that gets the vlas from the USER CONTROLER => change gMeme **************