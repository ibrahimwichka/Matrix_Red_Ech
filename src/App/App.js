import './App.css';
import {useState} from 'react';
import TwoByThree from '../Components/TwoByThree';
import ThreeByFour from '../Components/ThreeByFour';


function App () {
  
  const [twoby_three, settwoby_three] = useState(false)
  const [threeby_four, setthreeby_four] = useState(false)

  function handleClick1(){
    settwoby_three(!twoby_three)
    setthreeby_four(false)
  }
  function handleClick2(){
    setthreeby_four(!threeby_four)
    settwoby_three(false)
  }
  
  return (
    <div>
      <div className = "Heading">
        <h1> Matrix To Reduced Row-Echelon Form </h1>
        <h2> A Linear Algebra Tool </h2>
      </div>
      <br/>
      <p> Choose the dimensions of the matrix </p>
      <button className = "dimensions" 
      onClick = 
      {() => 
        {handleClick1()} 
      }> 2 x 3 </button>
      <button className = "dimensions" 
      onClick = 
      {()=>
        {handleClick2()}
      }> 3 x 4 </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {twoby_three ? <TwoByThree/> : null}
      {threeby_four ? <ThreeByFour/> : null}
      
      
    </div>
  )
}

export default App;
