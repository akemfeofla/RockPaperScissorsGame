// 요소 가져오기
const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');

const result = ['✌️', '✊', '✋'];

const show = (user, computer, result) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = result;
};

const game = (user, computer) => {
  let message;
  if (user === computer) {
    message = '무승부!';
  } else {
    switch (user + computer) {
      // user이김: 가위보, 바위가위, 보바위
      // computer이김: 가위바위, 바위보, 보가위
      case '✌️✋':
      case '✊✌️':
      case '✋✊':
        message = '당신 승리!!';
        break;
      case '✌️✊':
      case '✊✋':
      case '✋✌️':
        message = '컴퓨터 승리!!';
        break;
    }
  }

  show(user, computer, message);
};

const play = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener('click', play);
});
