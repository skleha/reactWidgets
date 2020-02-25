import React from 'react';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentTab: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.tabClass = this.tabClass.bind(this);
  }

  content(selector) {
    const myContent = this.props.panes.map(ele => ele.content)
    return myContent[selector];
  }

  handleClick(idx) {
    this.setState({currentTab: idx})
  }

  tabClass(idx) {
    if (idx === this.state.currentTab) {
      return "selected";
    } else {
      return "";
    }
  }

  render() {

    const showContent = this.content(this.state.currentTab);

    return (
      <div>
        <ul>
          {this.props.panes.map((ele, idx) => 
            <li key={idx}
            className={this.tabClass(idx)}
            onClick={() => this.handleClick(idx)}
            >{ele.title}</li>)}
        </ul>
        <article>
          {showContent}
        </article>
      </div>
    )
  }


}

export default Tabs;
