import React, {useState, useEffect} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [hideButton, setHidebutton] = useState(true)
  const [poems, setPoems] = useState([])

  const request = async () => {
    let req = await fetch("http://localhost:8004/poems")
    let res = await req.json()
    setPoems(res)
  }

  useEffect(() => {
    request()
  }, [])



  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={() => {
          if (hideButton){
            setHidebutton(false)
          }else{
            setHidebutton(true)
          }
        }
        }>Show/hide new poem form</button>
        {hideButton ? <NewPoemForm setPoems={setPoems}/> : null}
      </div>
      <PoemsContainer poems={poems}/>
    </div>
  );
}

export default App;
