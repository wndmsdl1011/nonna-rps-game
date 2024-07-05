import { useState } from 'react';
import './App.css';

import confetti from 'canvas-confetti';
import Box from './component/Box';

const choice = {
  rock: {
    name: "Rock",
    img: "https://i.natgeofe.com/k/ab1c0ce9-21ea-4543-891a-ff496845b0cf/geology-igneous_3x2.jpg"
  },
  scissors: {
    name: "Scissors",
    img: 'https://i.namu.wiki/i/9uflE3hRwRIk5OZkdtWrMJuGrRzD1oci2v_UVG_QFIkNfdiK9eRsTAvmL6vkLgInO6-ix42vbqFPI5ctvI1qzXHaEDS_4ZnTLnIJnQF0ZT5oUuqWUoaoc_4gLAnqzf2ys7NCBkgPW2fblwikHp2S_Q.webp'
  },
  paper: {
    name: "Paper",
    img: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-sheet-of-paper-png-png-image_13141476.png'
  }

}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [result2, setResult2] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    const userResult = judgement(choice[userChoice], computerChoice);
    const computerResult = judgement2(computerChoice, choice[userChoice]);
    //setResult(judgement(choice[userChoice], computerChoice));
    //setResult2(judgement2(computerChoice, choice[userChoice]))

    setResult(userResult);
    setResult2(computerResult);

    // 사용자가 이겼을 때 폭죽 효과를 실행
    if (userResult === "win") {
      firework();
    }
  };

  const judgement = (user, computer) => {

    // 가위바위보 로직을 스스로 정의
    // user == computer -> tie
    // user == rock, computer == scissors -> user win
    // user == rock, computer == paper -> user lose
    // user == paper, computer == rock -> user win
    // user == paper, computer == scissors -> user lose
    // user == scissors, computer == paper -> user win
    // user == scissors, computer == rock -> user lose

    if (user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
    else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
  };

  const judgement2 = (user, computer) => {
    if (user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
    else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
  };


  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <h1 className='game-name'>Rock! Paper! Scissors!</h1>
      <div className='main'>
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result2} />
      </div>

      <div className='btn'>
        <button onClick={() => play("rock")}>✊</button>
        <button onClick={() => play("paper")}>🖐️</button>
        <button onClick={() => play("scissors")}>✌️</button>
      </div>
    </div>

  );
}

function firework() {
  var duration = 15 * 100;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 0 };
  //  startVelocity: 범위, spread: 방향, ticks: 갯수

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    );
  }, 250);
}

export default App;
