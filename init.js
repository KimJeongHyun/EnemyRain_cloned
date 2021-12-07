let interval = '';  // 게임 시작 버튼을 누르면 이 let 변수에 new Enemy interval이 할당됩니다.

const initScore = () =>{
    const scoreVal = document.getElementById('scoreVal');
    scoreVal.innerText = 0;
}                   // 현재 점수를 초기화합니다.

const initTotalScore = () =>{
    const totalScoreVal = document.getElementById('totalScoreVal');
    totalScoreVal.innerText = 0;
}                   // 총 점수를 초기화합니다.

const addScore = () =>{
    const scoreVal = document.getElementById('scoreVal');
    scoreVal.innerText = parseInt(scoreVal.innerText)+1;
}                   // 점수를 1 더합니다.

const getTotalScore = () =>{
    const totalScoreVal = document.getElementById('totalScoreVal');
    totalScoreVal.innerText = parseInt(document.getElementById('scoreVal').innerText)
}                   // 총 점수를 보여주기 위한 함수입니다. game end시 호출됩니다.

const removeEnemies = () =>{
    const enemies = document.getElementsByClassName('enemy')
    while(enemies.length>0){
        for (let i=0; i<enemies.length; i++){
            document.getElementById('bg').removeChild(enemies[i]);
        }
    }
}                   // 현재 field에 있는 모든 Enemy element를 제거합니다.

const setHeroEvent = () =>{
    const heroTag = new Hero();
    heroTag.initHeroPosition();
    window.addEventListener('keydown',(e)=>{
        switch(e.key){
            case 'ArrowRight':
                if (heroTag.x<document.getElementById('bg').offsetWidth-35){
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
}       // hero element의 event를 정의합니다. 

const startFunc = () =>{
    document.getElementById('hero').style.display='block';
    document.getElementById('startBtn').style.display='none';
    document.getElementById('stopBtn').style.display='inline-block';
                                                // 기본적으로 hero는 field에 렌더링되지 않은 상태입니다.
                                                // start 버튼을 누르면 hero가 field에 표시되며
                                                // 게임을 중간에 종료하는 stop 버튼을 start 버튼 대신 표시합니다.

    setHeroEvent();                             // hero에 event를 설정합니다.
    initScore();                                // 현재 점수를 초기화 합니다.
    initTotalScore();                           // 총 점수를 초기화합니다.
    
    interval = setInterval(function(){          // 전역에 선언된 interval에 Enemy 객체 생성 interval을 할당합니다.
        const enemy = new Enemy();
        
        const enemyX = Math.random()*765+'px';  // 0~765px 사이 어디엔가로 Enemy x좌표를 설정합니다.
                                                // 맨 끝 지점인 800px에서 hero의 width인 35px를 뺀 765px 입니다.

        enemy.newElem.style.left = enemyX;
        enemy.x = parseInt(enemyX.split('px')[0]);  
        // enemyX는 string이므로 int로 변환합니다.

        document.getElementById('bg').appendChild(enemy.newElem);   
        // field에 해당 객체를 렌더링합니다.

        enemy.setEnemyInterval();   
        // 해당 Enemy 객체의 Interval을 설정합니다.
        
    },3000)
}

const stopFunc = () =>{
    clearInterval(interval);                                        // stop 버튼을 누르면 전체 interval이 제거됩니다.
    removeEnemies();                                                // field의 enemy를 모두 지웁니다.
    initScore();                                                    // 현재 점수를 초기화합니다.
    document.getElementById('hero').style.display='none';           
    document.getElementById('stopBtn').style.display='none';
    document.getElementById('startBtn').style.display='inline-block'; // 초기 화면으로 돌립니다.
}

const endFunc = () =>{
    clearInterval(interval);    // 게임이 끝났으므로 interval을 제거합니다.
    removeEnemies();            // 모든 Enemy 요소를 지웁니다.
    getTotalScore();            // 총 점수를 가져옵니다. 
                                // 총 점수를 지칭하는 태그는 display:none; 처리가 되어 있습니다.
    initScore();                // 현재 점수를 초기화합니다.

    document.getElementById('hero').style.display='none';
    document.getElementById('bg').style.display='none';
    document.getElementById('stopBtn').style.display='none';
    document.getElementById('reBtn').style.display='block';
    document.getElementById('die').style.display='block';
    document.getElementById('gameover').style.display='block';
    document.getElementById('score').style.display='none';
    document.getElementById('totalScore').style.display='inline-block';

    // game end를 표시하고자 사용된 display입니다.
    // 조건에 맞게 element를 생성해 append했다가, remove했다가 하는 방법을 먼저 생각했으나
    // 최초 렌더링 이후 잦은 DOM 변화가 있는 경우 브라우저 자체의 부담이 있지 않을까? 라는 생각에
    // 모든 element를 작성해둔 뒤 display를 통해 제어했습니다.
}

const reFunc = () =>{
    document.getElementById('bg').style.display='block';
    document.getElementById('startBtn').style.display='block';
    document.getElementById('reBtn').style.display='none';
    document.getElementById('die').style.display='none';
    document.getElementById('gameover').style.display='none';
    document.getElementById('score').style.display='block';
    document.getElementById('totalScore').style.display='none';

    // game end시 렌더링되는 화면에 Re 버튼이 있고, 해당 버튼의 onclick에 적용됩니다.
    // 초기 화면으로 돌아갑니다.
}