'use strict'



var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 } // not yet


//                                         **********************   MEME MODAL
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }];
var gMeme = {
    selectedImgId: '',
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'white',
            strokeColor: 'black'
        }
    ]
}




//                              *************** returns to meme from service to controller
function getMeme (){
    return gMeme
}

//                              ********** functions that gets the vlas from the USER CONTROLER => change gMeme
function getClickedMeme(memeId) {
    // console.log('gMeme', gMeme);
    // console.log('gMeme.selectedImgId', gMeme.selectedImgId);
    // console.log('memeId', memeId);
    gMeme.selectedImgId = memeId

}

function setTextColor (textColor){
    gMeme.lines[0].color = textColor
}

function setStrokeColor (strokeColor) {
gMeme.lines[0].borderColor = strokeColor
    console.log('gMeme', gMeme);
}

function setFontSize (fontsize){
    gMeme.lines[0].size
}

function setMemeText (text){
    console.log(text);
    
    gMeme.lines[0].txt = text

    console.log(gMeme);
    
}
//                              ********** END OF functions that gets the vlas from the USER CONTROLER => change gMeme **************