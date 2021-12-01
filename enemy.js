class Enemy {
    constructor(){
        this.newElem = document.createElement('div');
        this.newElem.id = 'enemy';
        this.newElem.className='enemy'
        this.y=0;
        this.interval='';
    }

    moveBottom(){
        this.newElem.style.top=this.y+'px';
    }

    setPosition(){
        this.newElem.style.backgroundPosition='-45px'
    }

}

const bg = document.getElementById('bg')

let interval = '';

const startFunc = () =>{
    document.getElementById('startBtn').style.display='none';
    document.getElementById('stopBtn').style.display='inline-block';
    interval = setInterval(function(){
        const ghost = new Enemy();
        
        ghost.newElem.style.left = Math.random()*765+'px'
        
        const moveBottomInterval = setInterval(function(){
            if (ghost.y<=540){
                ghost.moveBottom();
                ghost.y+=180;
            }else{
                ghost.setPosition();
            }
        },800)

        if (ghost.y>=540){
            clearInterval(moveBottomInterval);
            ghost.setPosition();
        }

        bg.appendChild(ghost.newElem);
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

    document.getElementById('stopBtn').style.display='none';
    document.getElementById('startBtn').style.display='inline-block';
}

