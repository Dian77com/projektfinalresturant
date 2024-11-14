
let buttoni = document.getElementById('b11')
let piza = document.getElementsByClassName('divi1')[2]
let Allmen = document.getElementsByClassName('divi1')[0]
let divordericecreamis = document.getElementById('divordericecream')
let icecream = document.getElementsByClassName('divi1')[4]

let burgger = document.getElementsByClassName('divi1')[1]
let wine = document.getElementsByClassName('divi')[3]





function search() {
    const inputi = document.getElementById('in1');
    const inputivalue = inputi.value.toLowerCase();

    document.getElementById('in1').value = '';

    if (inputivalue==='pizza'|| inputivalue==='piza'||inputivalue==='pica') {
        document.getElementById('divorder').style.display='none'
        document.getElementById('divorderpizza').style.display='block'
        document.getElementById('divordericecream').style.display='none'
        document.getElementById('divorderburgger').style.display='none'
        document.getElementById('divorderwine').style.display='none'
    } 
    else if (inputivalue==='allmenu'||inputivalue==='menu'||inputivalue==='meny') {
        document.getElementById('divorder').style.display = 'block'
        document.getElementById('divorderpizza').style.display = 'none'
        document.getElementById('divordericecream').style.display = 'none'
        document.getElementById('divorderburgger').style.display = 'none'
        document.getElementById('divorderwine').style.display = 'none'
    } 
    else if (inputivalue==='icecream' || inputivalue==='akullore'||inputivalue==='ice') {
        document.getElementById('divorder').style.display='none'
        document.getElementById('divorderpizza').style.display='none'
        document.getElementById('divordericecream').style.display='block'
        document.getElementById('divorderburgger').style.display='none'
        document.getElementById('divorderwine').style.display='none'
    }
 
    
    else if (inputivalue==='burgger'|| inputivalue==='burger'||inputivalue === 'hamburger') {
        document.getElementById('divorder').style.display='none'
        document.getElementById('divorderpizza').style.display='none'
        document.getElementById('divordericecream').style.display='none'
        document.getElementById('divorderburgger').style.display='block'
        document.getElementById('divorderwine').style.display='none'
    } 
    else if (inputivalue==='wine'|| inputivalue==='wen'||inputivalue==='win') {
        document.getElementById('divorder').style.display='none'
        document.getElementById('divorderpizza').style.display='none'
        document.getElementById('divordericecream').style.display='none'
        document.getElementById('divorderburgger').style.display='none'
        document.getElementById('divorderwine').style.display='block'
    }
    else{
        alert('Please Search Type of Food')
    }
}


function pizzas(){
    document.getElementById('divorder').style.display='none'
    document.getElementById('divorderpizza').style.display='block'
    document.getElementById('divordericecream').style.display='none'
    document.getElementById('divorderburgger').style.display='none'
    document.getElementById('divorderwine').style.display='none'

    }


function icecreami(){
    document.getElementById('divorder').style.display='none'
    document.getElementById('divorderpizza').style.display='none'
    document.getElementById('divordericecream').style.display='block'
    document.getElementById('divorderburgger').style.display='none'
    document.getElementById('divorderwine').style.display='none'





}

function allmenus(){
    document.getElementById('divorder').style.display='block'
    document.getElementById('divorderpizza').style.display='none'
    document.getElementById('divordericecream').style.display='none'
    document.getElementById('divorderburgger').style.display='none'
    document.getElementById('divorderwine').style.display='none'




}


function burggeri(){
    document.getElementById('divorder').style.display='none'
    document.getElementById('divorderpizza').style.display='none'
    document.getElementById('divordericecream').style.display='none'
    document.getElementById('divorderburgger').style.display='block'
    document.getElementById('divorderwine').style.display='none'


}
function winii(){
    document.getElementById('divorder').style.display='none'
    document.getElementById('divorderpizza').style.display='none'
    document.getElementById('divordericecream').style.display='none'
    document.getElementById('divorderburgger').style.display='none'
    document.getElementById('divorderwine').style.display='block'

}

document.getElementsByClassName('imgmenu')[0].addEventListener('click',divkryesor)
function divkryesor(){
    if(document.getElementById('divk1').style.display=="none"){
        document.getElementById('divk1').style.display="block"
        document.getElementById('divk2').style.marginLeft="300px"

    }
    else{
        document.getElementById('divk1').style.display="none"
        document.getElementById('divk2').style.marginLeft="0px"

    }
}








