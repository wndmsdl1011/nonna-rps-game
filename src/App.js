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
  const [userSelect,setUserSelect] = useState(null)

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]) 

  }
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect}/>
        <Box title="Computer" />
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
