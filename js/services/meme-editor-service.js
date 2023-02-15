'use strict'



var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }];



var gMeme = {
    selectedImgId: '',
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            strokeColor: 'black'
        }
    ]
}


function getMeme (){
    return gMeme
}


function getClickedMeme(memeId) {
    // console.log('gMeme', gMeme);
    // console.log('gMeme.selectedImgId', gMeme.selectedImgId);
    // console.log('memeId', memeId);
    gMeme.selectedImgId = memeId

}

function setTextColor (textColor){
    gMeme.lines[0].color = textColor
}

function setBorderColor (strokeColor) {
gMeme.lines[0].borderColor = strokeColor
    console.log('gMeme', gMeme);
}

function setFontSize (fontsize){
    gMeme.lines[0].size
}

