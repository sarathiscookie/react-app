import { Component } from 'react';
import ClassComponent from './Components/ClassComponent';
import ClickCounterComponent from './Components/ClickCounterComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import HoverCounterComponent from './Components/HoverCounterComponent';
import { MultiClassComponentOne, MultiClassComponentTwo} from './Components/MultiClassComponent';

function App() {
  return (
    <div className="App">
      <h4>Hello! Welcome to React application</h4>
      <h5>Processing...</h5>
      <ClassComponent />
      <FunctionalComponent />
      <MultiClassComponentOne />
      <MultiClassComponentTwo />
      <ClickCounterComponent />
      <HoverCounterComponent />
    </div>
  );
}

export default App;