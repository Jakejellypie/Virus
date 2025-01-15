// Select the first element with the class 'ClickMe'
const ClickMe = document.getElementById('ClickMe');
const Audio = document.getElementById('audio');
const Body = document.getElementById('mainBody');
const TommyImage = document.getElementById('tommyIMG');
const Gif = document.getElementById('gifSection');
const Gif2 = document.getElementById('gifSection2');

ClickMe.addEventListener('click', ()=>{
clickColorChange();
audioPlay();
setTimeout(function(){
    TommyImage.style.display = 'none';
    Gif.classList.add('gifVisible');
}, 8000);

setTimeout(function(){
    Gif.classList.remove('gifVisible');
    Gif.classList.add('gifInvisible');
}, 12000);

setTimeout(function(){
    Gif.style.display = 'none';
    Gif2.classList.add('gifVisible');
}, 17200);

setTimeout(function(){
    Gif2.classList.remove('gifVisible');
    Gif2.classList.add('gifInvisible');
    CloseApp();
}
, 21000);



});

function clickColorChange(){

    ClickMe.style.display = 'none';
    TommyImage.classList.add('tommyIMGVisible');
    setTimeout(function(){
        TommyImage.classList.remove('tommyIMGVisible');
        TommyImage.classList.add('tommyIMGInvisible');
    }, 6000);

}

function audioPlay(){
        Audio.play();
    
}

function CloseApp(){
    alert('After going through your device, the virus has committed suicide as it would rather kill itself than continue living \n \n Please close this and get on with your life.  \n\n Happy returns of the day tho :) ')
    }
