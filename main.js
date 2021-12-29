
const currentWord=document.querySelector('#current-word');
const wordInput=document.querySelector('#word-input');
const time=document.querySelector('#time');
const score=document.querySelector('#score');
const seconds=document.querySelector('#seconds');
const message=document.querySelector('#message');
const start=document.getElementById('button');
const levels={
    easy:5,
    medium:3,
    hard:2
}
const currentLevel=levels.medium;
let moment =currentLevel;
let isPlaying;
let scoreGame =0;
start.addEventListener('click', startGame);
const words = [
    'mohsen',
    'river',
    'leila',
    'statue',
    'generate',
    'html',
    'notaraj',
    'runaway',
    'joke',
    'css',
    'bullying',
    'hero',
    'javascript',
    'esmaeili',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'better',
    'symptom',
    'laughter',
    'i can do it',
    'i never gonna give up',
    'adolescence',
    'adulthood'
  ];
  function startGame(){
      seconds.innerHTML=currentLevel;
    showingWord(words);
    wordInput.addEventListener('input', startScore);
    setInterval(showTime, 1000);
    setInterval(gameOver, 50);
  }
  function startScore(){
      if(matchWords()){
          scoreGame++;
          isPlaying=true;
          showingWord(words);
          wordInput.value='';
          moment=currentLevel+1;
      }
      score.innerHTML=scoreGame;
  }
  function matchWords(){
      if(wordInput.value===currentWord.innerHTML){
          message.innerHTML='you win';
          return true;
      }else{
          message.innerHTML='';
          return false;
      }
  }
  function showingWord(words){
      const randomIndex=Math.floor(Math.random()*words.length);
      currentWord.innerHTML=words[randomIndex]; 

  }
  function showTime(){
      if(moment>0){
         moment--; 
      }else if(moment===0){
          isPlaying=false;
      }
   time.innerHTML=moment;
  }
  function gameOver(){
      if(moment===0){
          message.innerHTML='Game Over!!!';
          scoreGame=0;
      }
  }