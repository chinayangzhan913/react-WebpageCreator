import React, {Component} from 'react'

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.property = ['width','position']
  }

  render() {
    return <div onClick={(e) => {
      e.stopPropagation();
      this.props.onClick(this);
    }} style={Object.assign({}, style.img, this.props.style)}>
      this is Image
    </div>
  }
}
const style = {
  img: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    cursor: 'pointer',
    position:'absolute'
  }
};