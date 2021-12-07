class Hero {
    constructor(){
        this.hero=document.getElementById('hero');
        this.x = 400;
        this.y = 540;
    }
    moveTop(){
        this.hero.style.backgroundPosition='-35px';
        this.hero.style.top = this.y+'px';
    }               // hero가 위로 움직입니다.
    moveBottom(){
        this.hero.style.backgroundPosition='0px';
        this.hero.style.top = this.y+'px'
    }               // hero가 아래로 움직입니다.
    moveLeft(){
        this.hero.style.backgroundPosition='70px';
        this.hero.style.left = this.x+'px';
    }               // hero가 왼쪽으로 움직입니다.
    moveRight(){
        this.hero.style.backgroundPosition='35px';
        this.hero.style.left = this.x+'px';
    }               // hero가 오른쪽으로 움직입니다.
                    // 각각 backgroundPosition을 통해 올바른 방향으로 보이게끔 만듭니다.
    initHeroPosition(){
        this.x=400;
        this.y=540;
        this.hero.style.top='540px';
        this.hero.style.left='400px';
        this.hero.style.backgroundPosition='0px';
    }               // 게임 시작, 재시작 등에서 hero의 위치 및 backgroundPosition을 시켜줍니다.
}

