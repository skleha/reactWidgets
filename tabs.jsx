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
    this.setState({currentTab: idx})
  }

  render() {

    const showContent = this.content(this.state.currentTab);

    return (
      <div>
        <ul>
          {this.props.panes.map((ele, idx) => 
            <li key={idx}
            className={}
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
