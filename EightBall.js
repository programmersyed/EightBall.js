var userName ='Lebron Curry';
userName ? console.log(
  `Hello ${userName}`
) :console.log(
  'Hello!'
);
var userQuestion = 'Will I live on a farm in the future?';
console.log(
  `${userName} wants to know ${userQuestion}... I can only guess `
)
var randomNumber= Math.floor(Math.random() * 8);
var eightBall= '';
switch (randomNumber){
  case 0:
  eightBall = `It is certain ${username}`;
  break;
  case 1:
  eightBall= `No ${userName}`;
  break;
  case 2:
  eightball= `The vision is hazy ${userName}`;
  break;
  case 3:
  eightBall= `My vision is impaired like you ${userName}`;
  break;
  case 4:
  eightBall=`My sources say that you are not the brightest ${userName}`;
  break;
  case 5:
  eightBall=`The ${userName} is asking the wrong questions`;
  break;
  case 6:
  eightBall=`Time flies ${userName} and it looks like your hairline is receding`;
  break;
  case 7:
  eightBall=`Your guess is as good as mine ${userName}`;
  break;
  default:
  console.log('The answer is no')
}
console.log(`I believe that: ${eightBall}`);

