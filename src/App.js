import { Component } from 'react';
import ClassComponent from './Components/ClassComponent';
import ClickCounterComponent from './Components/ClickCounterComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import HoverCounterComponent from './Components/HoverCounterComponent';
import { MultiClassComponentOne, MultiClassComponentTwo} from './Components/MultiClassComponent';
import Ex1PropsComponent from './Components/Ex1PropsComponent';
import Ex2OnChangeOnSubmitComponent from './Components/Ex2OnChangeOnSubmitComponent';
import Ex3OnChangeOnSubmitComponent from './Components/Ex3OnChangeOnSubmitComponent';
import Ex4EventHandlerSetStateComponent from './Components/Ex4EventHandlerSetStateComponent';

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
      <Ex1PropsComponent text="Hello I am props!"/>
      <Ex2OnChangeOnSubmitComponent />
      <Ex3OnChangeOnSubmitComponent />
      <Ex4EventHandlerSetStateComponent />
    </div>
  );
}

export default App;