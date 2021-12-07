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
    } // Enemy가 아래로 움직입니다.

    setCollision(){
        this.newElem.style.backgroundPosition='-45px'
    } // Enemy가 hero와 충돌하면 backgroundPosition을 통해 뒷면을 보여줍니다.
    
    clearEnemyInterval(){
        clearInterval(this.interval);
    } // 각 Enemy 객체에 적용된 interval을 지웁니다.

    removeEnemyNode(){
        if (this.newElem.parentNode!==null){
            this.newElem.parentNode.removeChild(this.newElem);
        }
    } // 현재 객체를 제거합니다.  

    enemyDyingSound(){
        const audio = new Audio('./audio/dying.wav');
        audio.play();
    } // setCollision() 이후 발생합니다. 죽는 소리를 재생합니다.

    checkCollision(){
        const heroX = parseInt((document.getElementById('hero').style.left).split('px')[0])
        const heroY = parseInt((document.getElementById('hero').style.top).split('px')[0])
            // 현재 DOM의 hero 객체 (x,y) 좌표를 확인합니다.
        const removeNode = () =>{
            this.removeEnemyNode();
        }   // 현재 객체를 제거합니다.
    
        if (Math.abs(heroX-this.x)<20 && Math.abs(heroY-this.y)<20){
            this.setCollision();        // 충돌이 발생하면
            this.clearEnemyInterval();  // 해당 객체의 interval을 제거하고
            addScore();                 // init.js에서 호출됩니다. 점수를 1 증가시킵니다. 
            this.enemyDyingSound();     // 죽는 소리를 재생합니다.
            setTimeout(function(){
                removeNode();           // 바로 removeNode()를 호출하면 Enemy의 뒷면이 보이지 않기 때문에
            },1000);                    // 1초 동안 뒷면을 보이고 없어지도록 setTimeout을 채용했습니다.
        }

    }

    setEnemyInterval(){
        const intervalWork = () =>{
            if (this.y<=540){                   // Field의 height이 540px로 설정되어있습니다.
                this.checkCollision();          // 0.1초의 주기마다 충돌감지 함수를 호출합니다.
                this.moveBottom();      
                this.y+=3;                      // 0.1초의 주기마다 현재 객체를 아래로 이동시킵니다.
                if (document.getElementById('stopBtn').style.display=='none'){
                    this.clearEnemyInterval();
                }                               

                // 모든 Enemy 객체의 Interval을 제거하고자 하는 if입니다.                               
                // 로직에서 stopBtn의 미표시는 game over 때 발생합니다.
                // 각각 Enemy 객체는 game over 여부를 주기적으로 검사하고, 그렇다면 interval을 해제합니다.


            }else{                              // 해당 객체가 필드 끝에 닿은 경우
                this.clearEnemyInterval();      // 객체의 Interval을 제거합니다.
                this.removeEnemyNode();         // 필드에 있는 Enemy를 제거합니다.
                endFunc();                      // init.js에 선언된 endFunc()을 호출합니다.
            }
        }
        this.interval=setInterval(function(){   // setInterval의 function은 익명 함수로 처리되므로
            intervalWork();                     // 별도의 함수를 만들어 객체를 컨트롤할 수 있게 했습니다.
        },100)                              

    }
}
