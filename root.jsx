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
  <div className="main">
    <h2>React Widgets</h2>
    <Clock />
    <Tabs panes={panes}/>

  </div>
  
  );

}

export default Root;

