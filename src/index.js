import React, { useState } from 'react';
import ReactDOM from 'react-dom';



// write your Color component here


const Color = (props) => {
  return (
    <div>
      <div className={props.color} onClick={() => props.selectColor(props.color)} />
      <div className={props.selected} onClick={() => props.selectColor(props.selected)} />
    </div>
  )
}

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const selectColor = (colorName, outline) => {
    setSelectedColor(colorName, outline);
  }
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color='red' selectColor={selectColor} 
        setSelectedColor = {setSelectedColor}/>
        <Color color='blue' selectColor={selectColor}/>
        <Color color='green' selectColor={selectColor}/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);