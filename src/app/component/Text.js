import React, {Component} from 'react'

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.property = ['width','position']
  }

  render() {
    return <div onClick={(e) => {
      e.stopPropagation();
      this.props.onClick(this)
    }} style={Object.assign({}, style.text, this.props.style)}>
      this is Text
    </div>
  }
}
const style = {
  text: {
    overflow: 'hidden',
    textOverflow: "ellipsis",
    wordWrap: 'break-word',
    cursor: 'pointer',
    position:"absolute"
  }
};