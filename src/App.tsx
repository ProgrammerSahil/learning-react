import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    countRef.current++;
  }
// this is interesting because pressing the button doesnt do much until nodemon(or whatever vite uses) rerenders the component and then the changes are reflected
  useEffect(() => {
    setCount(countRef.current);
  }, [countRef.current])

    return (
      <><div className='parentContainer'>
        <div className="mainCard">
          <h2>Press the button</h2>
          <button onClick={handleIncrement}>Count: {countRef.current}</button>
        </div>
        </div>
      </>
    )

  
}

export default App
