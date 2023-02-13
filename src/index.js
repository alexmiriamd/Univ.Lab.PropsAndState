import React from 'react';
import ReactDOM from 'react-dom';

// write your Color component here

const Color = (props) => {
  return (
    <div className={props.color} />
  )
}

const Picker = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">
        <Color color='red'/>
        <Color color='blue'/>
        <Color color='green'/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);