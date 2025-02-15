import { useEffect, useState, useRef } from 'react'
import './App.css'


const App = () => {

    const [blue, setBlue] = useState("0");

    const handleMouseDown = () => {
        if(parseInt(blue)>240) {
            setBlue("0")
        };
        let newBlue = parseInt(blue)+10>240?0:parseInt(blue)+10;
        setBlue(newBlue.toString());
    }

  return(
    <>
    <div className='mainContainer' onMouseDown={handleMouseDown} style={{backgroundColor: `rgb(103, 85, ${blue})`}}>
        <h2 className='mainHeading'>Hello, World</h2>

    </div>
    </>
  )
}

export default App;