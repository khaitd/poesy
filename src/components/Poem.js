import React, {useState} from "react";

function Poem({poem}) {
  const [boolly, setBoolly] = useState(true)
  return (
    <div>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>- {poem.author}</strong>
      </p>

      <button onClick={() => {

          if (boolly){
            setBoolly(false)
          }else{
            setBoolly(true)
          }
        }
      }> 
        {boolly ? "Mark as read" : "Read"}</button>

        





      
    </div>




  );
}

export default Poem;
