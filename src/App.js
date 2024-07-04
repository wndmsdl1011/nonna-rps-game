import { useState } from 'react';
import './App.css';
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
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBJrv6z6L3ixesiVIZcOoPfzCrQmS0IsE3A&s'
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
    setResult(judgement(choice[userChoice], computerChoice));
    setResult2(judgement2(computerChoice, choice[userChoice]))
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
      <div className='main'>
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result2} />
      </div>

      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>


    </div>

  );
}

export default App;
