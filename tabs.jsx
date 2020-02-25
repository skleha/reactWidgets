import React from 'react';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentTab: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  content(selector) {
    const myContent = this.props.panes.map(ele => ele.content)
    return myContent[selector];
  }

  handleClick(idx) {
    console.log("hi");
    // this.setState({currentTab: })
  }

  render() {

    const showContent = this.content(this.state.currentTab);

    return (
      <div>
        <ul>
          {this.props.panes.map((ele, idx) => 
            <li key={idx}
            >{ele.title} for the money</li>)}
        </ul>
        <article>
          {showContent}
        </article>
      </div>
    )
  }


}

export default Tabs;
