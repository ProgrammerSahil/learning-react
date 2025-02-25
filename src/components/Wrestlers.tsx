import React, { useEffect, useState } from "react";


const Wrestlers = ({ wrestlerObject }) => {
  const [wrestlerData, setWrestlerData] = useState(null);

  if (!wrestlerObject || !wrestlerObject.data) return <p>Loading...</p>;
  useEffect(() => {
    if (wrestlerObject) {
      setWrestlerData(wrestlerObject.data.roster);
    }
  }, [wrestlerObject]);
  console.log(wrestlerData);

  return(
        <div>
            {wrestlerData ? (
                <ul>
                    {Object.entries(wrestlerData).map((wrestler, index) => (
                        <li key={index}>{wrestler}</li>
                    ))}
                </ul>
            ) : (
                <p>No Wrestlers Available</p>
            )}
        </div>
    );
};

export default Wrestlers;
