import React from "react";
import Clock from './clock';
import Tabs from './tabs';

const panes = [
  { title: 'one', content: 'I am the first pane' },
  { title: 'two', content: 'Second pane here' },
  { title: 'three', content: 'Third pane here' }
];

const Root = () => {

  return (
  <div>
    
    <div className="title">
      <h2>React Widgets</h2>
      <h4>Styled for iPhone 8</h4>
    </div>

    <div className="main">
      <Clock />
      <Tabs panes={panes}/>
    </div>
  </div>
  
  );

}

export default Root;

