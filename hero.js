class Hero {
    constructor(){
        this.hero=document.getElementById('hero');
        this.x = 400;
        this.y = 540;
    }
    moveTop(){
        this.hero.style.backgroundPosition='-35px';
        this.hero.style.top = this.y+'px';
    }
    moveBottom(){
        this.hero.style.backgroundPosition='0px';
        this.hero.style.top = this.y+'px'
    }
    moveLeft(){
        this.hero.style.backgroundPosition='70px';
        this.hero.style.left = this.x+'px';
    }
    moveRight(){
        this.hero.style.backgroundPosition='35px';
        this.hero.style.left = this.x+'px';
    }
    
}

const hero = new Hero();

window.addEventListener('keydown',(e)=>{
    switch(e.key){
        case 'ArrowRight':
            if (hero.x<bg.offsetWidth-35){
                hero.moveRight()
                hero.x+=5;
            }
            break;
        case 'ArrowLeft':
            if (hero.x>0){
                hero.moveLeft()
                hero.x-=5;
            }
            break;
        case 'ArrowUp':
            if (hero.y>0){
                hero.moveTop();
                hero.y-=5;
            }
            break;
        case 'ArrowDown':
            if (hero.y<=540){
                hero.moveBottom();
                hero.y+=5;
            }
            break;
    }
})
