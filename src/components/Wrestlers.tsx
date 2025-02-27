import React, { useEffect, useState } from "react";


const Wrestlers = ({ wrestlerObject }) => {
  const [wrestlerData, setWrestlerData] = useState(null);

  useEffect(() => {
    if (wrestlerObject.data) {
      setWrestlerData(wrestlerObject.data.roster);
      console.log(wrestlerData);
    }
    
  }, [wrestlerObject]);
  
  if (!wrestlerObject || !wrestlerObject.data) return <p>Loading...</p>;
  

  return(
        <div>
           
        </div>
    );
};

export default Wrestlers;
