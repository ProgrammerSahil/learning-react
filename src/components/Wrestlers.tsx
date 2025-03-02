import React, { useEffect, useState } from "react";

interface WrestlerObjectType {
  "Made by": string; 
  Source: string;
  data: {
    roster: RosterObject;
  };
}

interface Wrestler {
  name: string;
  real_name: string;
  height: string;
  nickname: string;
  promotion: string;
  debut_year: number;
  finishers: string[];
  titles: {
    current: string[];
    former: string[];
  };
}
interface RosterObject {
  [key: string]: Wrestler; 
}


const Wrestlers = ({ wrestlerObject }: { wrestlerObject:WrestlerObjectType}) => {
  const [wrestlerData, setWrestlerData] = useState<RosterObject | null>(null);

  useEffect(() => {
    if (wrestlerObject.data) {
      setWrestlerData(wrestlerObject.data.roster);
    }

    
  }, [wrestlerObject]);
  
  if (!wrestlerObject || !wrestlerObject.data) return <p>Loading...</p>;
  

  return(
        <div>
           {wrestlerData && Object.entries(wrestlerData).map(([Id, wrestler]) => (
            <div key={Id} className="wrestler-card">
            <h2>{wrestler.name}</h2>
            <p>Real Name: {wrestler.real_name}</p>
            <p>Height: {wrestler.height}</p>
          </div>
           ))}
        </div>
    );
};

export default Wrestlers;
