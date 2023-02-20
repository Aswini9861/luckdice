const image1=document.querySelector('.img1')
const image2=document.querySelector('.img2')
const btnnew=document.querySelector('.btn--new')

function newgame(){
var ranmdice1=Math.floor((Math.random()*6)+1)
var ranmdice2=Math.floor((Math.random()*6)+1)
if (ranmdice1>ranmdice2){
    document.getElementById('winner').innerHTML='player1 win🚩'
}else if(ranmdice1===ranmdice2){
    document.getElementById('winner').innerHTML='Draw!'

}

else{
    document.getElementById('winner').innerHTML='player2 win🚩'

}
image1.src=`images/dice${ranmdice1}.png`
image2.src=`images/dice${ranmdice2}.png`
return newgame()
}





btnnew.addEventListener('click',function(){



    newgame()
 /*    var ranmdice1=Math.floor((Math.random()*6)+1)
    var ranmdice2=Math.floor((Math.random()*6)+1)
    if (ranmdice1>ranmdice2){
        document.getElementById('winner').innerHTML='player1 win🚩'
    }else if(ranmdice1===ranmdice2){
        document.getElementById('winner').innerHTML='Draw!'

    }

    else{
        document.getElementById('winner').innerHTML='player2 win🚩'

    }




    image1.src=`images/dice${ranmdice1}.png`
    image2.src=`images/dice${ranmdice2}.png`
 */

})
