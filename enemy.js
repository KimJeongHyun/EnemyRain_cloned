class Enemy {
    constructor(){
        this.newElem = document.createElement('div');
        this.newElem.id='';
        this.newElem.className='enemy'
        this.x=0;
        this.y=0;
        this.interval='';
    }

    moveBottom(){
        this.newElem.style.top=this.y+'px';
    }

    setCollision(){
        this.newElem.style.backgroundPosition='-45px'
    }

}
