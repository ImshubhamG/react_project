import React from 'react'

const Square = ({colorValue, hexValue}) => {
  return (
    <section className="square"
    style={{backgroundColor: colorValue}}
    >
      
     <p> {colorValue ? colorValue : "Empty Value"}</p> 
     <p> {hexValue ? hexValue : ""}</p> 
      
    </section>
  )
}
Square.defaultProps={
  colorValue: "Empty color value"
}
export default Square
