import React from "react";
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const panes = [
  { title: 'Name', content: 'Steve Kleha' },
  { title: 'Email', content: 'skleha@gmail.com' },
  { title: 'LinkedIn', content: 'www.linkedin.com/in/steve-kleha' }
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
      <Weather />
    </div>
  </div>
  
  );

}

export default Root;

