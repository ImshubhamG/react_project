import Square from "./Square";
import Input from "./Input";
import { useState } from "react";
function App() {
  const [colorValue,setcolorValue]= useState('')
  const [hexValue,sethexValue]= useState('')
  const [pstatus,setPstatus]=useState(false)
  const [menuStatus,setMenuStatus]=useState(false)
  return (
    <div className="App">
      <button className="micon" onClick={()=> setMenuStatus(!menuStatus)}>&#9776;</button>
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
      <input type={pstatus ? 'text' : 'password'} />
       <button onClick={()=>setPstatus(!pstatus)}>
      {pstatus ? 'Hide' : 'Show'}
      </button>
      <br />
      <Square colorValue={colorValue}
      hexValue={hexValue}
      />
      <Input 
      colorValue={colorValue}
      setcolorValue={setcolorValue}
      sethexValue={sethexValue}
      />
    </div>
  );
}

export default App;
