import React from 'react';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentTab: 0 };
  }

  content(selector) {
    const myContent = this.props.panes.map(ele => ele.content)
    return myContent[selector];
  }


  render() {

    const titles = this.props.panes.map(ele => ele.title);
    const showContent = this.content(this.state.currentTab);

    return (
      <div>
        <ul>
          {this.props.panes.map(ele => 
            <li>{ele.title}</li>)}
        </ul>
        <div>
          {showContent}
        </div>
      </div>
    )
  }


}

export default Tabs;
