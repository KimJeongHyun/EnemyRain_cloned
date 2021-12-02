class Enemy {
    constructor(){
        this.newElem = document.createElement('div');
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
    
    clearEnemyInterval(){
        clearInterval(this.interval);
    }

    removeEnemyNode(){
        this.newElem.parentNode.removeChild(this.newElem);
    }

    enemyDyingSound(){
        const audio = new Audio('./audio/dying.wav');
        audio.play();
    }

    checkCollision(){
        const heroX = parseInt((document.getElementById('hero').style.left).split('px')[0])
        const heroY = parseInt((document.getElementById('hero').style.top).split('px')[0])

        const removeNode = () =>{
            this.removeEnemyNode();
        }
        
        const addScore = () =>{
            document.getElementById('scoreVal').innerText = parseInt(document.getElementById('scoreVal').innerText)+1
        }

        if (Math.abs(heroX-this.x)<20 && Math.abs(heroY-this.y)<20){
            this.setCollision();
            this.clearEnemyInterval();
            addScore();
            this.enemyDyingSound();
            setTimeout(function(){
                removeNode();
            },1000);
        }

    }

    setEnemyInterval(){
        const intervalWork = async () =>{
            if (this.y<=540){
                this.checkCollision();
                this.moveBottom();
                this.y+=3;
                if (document.getElementById('stopBtn').style.display=='none'){
                    this.clearEnemyInterval();
                }
            }else{
                this.clearEnemyInterval();
                this.removeEnemyNode();
                endFunc();
            }
        }
        this.interval=setInterval(function(){
            intervalWork();
        },100)
    }
}
