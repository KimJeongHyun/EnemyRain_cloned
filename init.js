const bg = document.getElementById('bg')

let interval = '';

const heroTag = new Hero();

window.addEventListener('keydown',(e)=>{
    switch(e.key){
        case 'ArrowRight':
            if (heroTag.x<bg.offsetWidth-35){
                heroTag.moveRight()
                heroTag.x+=5;
            }
            break;
        case 'ArrowLeft':
            if (heroTag.x>0){
                heroTag.moveLeft()
                heroTag.x-=5;
            }
            break;
        case 'ArrowUp':
            if (heroTag.y>0){
                heroTag.moveTop();
                heroTag.y-=5;
            }
            break;
        case 'ArrowDown':
            if (heroTag.y<=540){
                heroTag.moveBottom();
                heroTag.y+=5;
            }
            break;
    }
})

const checkCollision = () =>{
    
}

const startFunc = () =>{
    document.getElementById('startBtn').style.display='none';
    document.getElementById('stopBtn').style.display='inline-block';

    heroTag.initHeroPosition();

    interval = setInterval(function(){
        const ghost = new Enemy();
        
        const ghostIndex = Math.random()*100
        const ghostX = Math.random()*765+'px';
        ghost.newElem.style.left = ghostX;
        ghost.x = ghostX;

        ghost.newElem.id = ghostIndex;
        
        const moveBottomInterval = setInterval(function(){
            if (ghost.y<=540){
                ghost.moveBottom();
                ghost.y+=180;
                console.log(ghost.x+' '+ghost.y);
            }else{
                ghost.setCollision();
            }
            
        },800)
        bg.appendChild(ghost.newElem);
        if (ghost.y>=540){
            clearInterval(moveBottomInterval);
            ghost.setCollision();
        }

        
    },1500)
}

const stopFunc = () =>{
    clearInterval(interval);
    const enemies = document.getElementsByClassName('enemy')
    while(enemies.length>0){
        for (let i=0; i<enemies.length; i++){
            bg.removeChild(enemies[i]);
        }
    }
    heroTag.initHeroPosition();
    document.getElementById('stopBtn').style.display='none';
    document.getElementById('startBtn').style.display='inline-block';
}

