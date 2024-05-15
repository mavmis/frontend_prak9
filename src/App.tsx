import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import store from './store/store';

function App() {
//  const [count, setCount] = useState(0);
 // const {incriment, count} = store;
  const {increment, value} = store;

  const handleclick = () => {
    console.log("1");
    increment();
  }
  /*useEffect(() => {
    // Update the document title with the current count
    document.title = `You clicked the button ${count} times`;
  }, [count]); // Only re-run the effect if count changes
*/
  return (
    <div>
      <span> Коли {value} . </span>
      <button onClick={handleclick}>
        <span> Click me </span>
      </button>
    </div>
  );
}

export default observer(App);
