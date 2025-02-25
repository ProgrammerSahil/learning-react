import { useEffect, useState, useRef } from 'react'
import './App.css'
import axios from 'axios';
import Wrestlers from './components/Wrestlers';


const App = () => {

    const [blue, setBlue] = useState("0");
    const [wrestlers, setWrestlers] = useState({});

    const handleMouseDown = () => {
        if(parseInt(blue)>240) {
            setBlue("0")
        };
        let newBlue = parseInt(blue)+10>240?0:parseInt(blue)+10;
        setBlue(newBlue.toString());
    }

    const getWrestlersData = async () => {
      try{
        const allOfThemAPIResponse = await axios.get("http://localhost:3000/wrestler/showall");
        setWrestlers(allOfThemAPIResponse.data);
      }catch(error){
        console.log(error);
      }
      
    }

    useEffect(() => {
      getWrestlersData();
    }, [])

  return(
    <>
    <div className='mainContainer' onMouseDown={handleMouseDown} style={{backgroundColor: `rgb(103, 85, ${blue})`}}>
        <h2 className='mainHeading'>Hello, World</h2>
    </div>
    <Wrestlers wrestlerObject={wrestlers} />
    </>
  )
}

export default App;