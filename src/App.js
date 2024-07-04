import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name:"Rock",
    img:"https://i.natgeofe.com/k/ab1c0ce9-21ea-4543-891a-ff496845b0cf/geology-igneous_3x2.jpg"
  },
  scissors:{
    name:"Scissors",
    img: 'https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png'
  },
  paper: {
    name:"Paper",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBJrv6z6L3ixesiVIZcOoPfzCrQmS0IsE3A&s'
  }

}
function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect]=useState(null);
  const [result,setResult] = useState("");
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]); 
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    judgement(choice[userChoice],computerChoice)
  };

  const judgement = (user,computer) => {
    console.log("user",user,"computer",computer);

    // 가위바위보 로직을 스스로 정의
    // user == computer -> tie
    // user == rock, computer == scissors -> user win
    // user == rock, computer == paper -> user lose
    // user == paper, computer == rock -> user win
    // user == paper, computer == scissors -> user lose
    // user == scissors, computer == paper -> user win
    // user == scissors, computer == rock -> user lose

    if(user.name == computer.name) {
      return "tie"
    }else if(user.name=="Rock"){
      if(computer == "Scissors"){
        return "win"
      }else{
        return "lose"
      }
    }else if(user.name=="Paper"){
      if(computer == "Rock"){
        return "win"
      }else{
        return "lose"
      }
    }else if(user.name)

    
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice);
    console.log("item array",itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value",randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  } 

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
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
