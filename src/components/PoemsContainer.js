import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  

  return (
    <div className="poems-container">
      {poems.map((e) => {
       return <Poem key={e.id} poem={e}/>
      } )}
    </div>
  );
}

export default PoemsContainer;


