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

    initHeroPosition(){
        this.x=400;
        this.y=540;
        this.hero.style.top=this.y+'px';
        this.hero.style.left=this.x+'px';
        this.hero.style.backgroundPosition='0px';
    }
    
}

