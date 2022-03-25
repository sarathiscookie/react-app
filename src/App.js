import { Component } from 'react';
import ClassComponent from './Components/ClassComponent';
import ClickComponent from './Components/ClickComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import HoverComponent from './Components/HoverComponent';
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
      <ClickComponent />
      <HoverComponent />
    </div>
  );
}

export default App;