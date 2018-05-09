var neku = document.querySelector('#neku');

var count = 0;

var sprites = [
    'sprite1'
    ,'sprite2'
    ,'sprite3'
    ,'sprite4'
    ,'sprite5'
    ,'sprite6'
    ,'sprite7'
    ,'sprite8'
]

setInterval(function(){
   trocarSprite(); 
}, 100);

function trocarSprite(){
    count++;
    
    if(count > sprites.length) {
        count = 0;
        trocarSprite();
        return;
    }

    sprites.forEach(sprite => neku.classList.remove(sprite))

    neku.classList.add(sprites[count-1]);
}