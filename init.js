let interval = '';

const initScore = () =>{
    const scoreVal = document.getElementById('scoreVal');
    scoreVal.innerText = 0;
}

const initTotalScore = () =>{
    const totalVal = document.getElementById('totalVal');
    totalVal.innerText = 0;
}

const addScore = () =>{
    const scoreVal = document.getElementById('scoreVal');
    scoreVal.innerText = parseInt(scoreVal.innerText)+1;
}

const getTotalScore = () =>{
    const totalVal = document.getElementById('totalVal');
    totalVal.innerText = parseInt(document.getElementById('scoreVal').innerText)
}

const removeEnemies = () =>{
    const enemies = document.getElementsByClassName('enemy')
    while(enemies.length>0){
        for (let i=0; i<enemies.length; i++){
            document.getElementById('bg').removeChild(enemies[i]);
        }
    }
}

const startFunc = () =>{
    document.getElementById('hero').style.display='block';
    document.getElementById('startBtn').style.display='none';
    document.getElementById('stopBtn').style.display='inline-block';
    
    const heroTag = new Hero();
    heroTag.initHeroPosition();
    initScore();
    initTotalScore();

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

    interval = setInterval(function(){
        const enemy = new Enemy();
        
        const enemyX = Math.random()*765+'px';

        enemy.newElem.style.left = enemyX;
        enemy.x = parseInt(enemyX.split('px')[0]);

        document.getElementById('bg').appendChild(enemy.newElem);

        enemy.setEnemyInterval();
        
    },3000)
}

const stopFunc = () =>{
    clearInterval(interval);
    removeEnemies();
    initScore();
    document.getElementById('stopBtn').style.display='none';
    document.getElementById('hero').style.display='none';
    document.getElementById('startBtn').style.display='inline-block';
}

const endFunc = () =>{
    clearInterval(interval);
    removeEnemies();
    getTotalScore();
    initScore();

    document.getElementById('bg').style.display='none';
    document.getElementById('stopBtn').style.display='none';
    document.getElementById('hero').style.display='none';
    document.getElementById('reBtn').style.display='block';
    document.getElementById('die').style.display='block';
    document.getElementById('gameover').style.display='block';
    document.getElementById('score').style.display='none';
    document.getElementById('totalScore').style.display='inline-block';
    
}

const reFunc = () =>{
    document.getElementById('bg').style.display='block';
    document.getElementById('startBtn').style.display='block';
    document.getElementById('reBtn').style.display='none';
    document.getElementById('die').style.display='none';
    document.getElementById('gameover').style.display='none';
    document.getElementById('score').style.display='block';
    document.getElementById('totalScore').style.display='none';
}