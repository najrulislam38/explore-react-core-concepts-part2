
import './App.css'
import Counter from './Counter';
import Team from './team';
import Users from './Users';
import Friends from './Friends';

function App() {
  const handleClick = () =>{
    alert ('button clicked')
  };
  function handleClick2() {
    alert ('Button 2 Clicked')
  }
  
  const addFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h2>Explore React Core Concepts 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>      

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert("third clicked")}}>Third</button>
      <button onClick={() => addFive(3)}>Four</button>
    </>
  )
}

export default App
