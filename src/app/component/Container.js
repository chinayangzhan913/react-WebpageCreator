/**
 * Created by chinayangzhan on 2017/9/22.
 */
import React, {Component} from 'react'

class Container extends Component {
  constructor(props) {
    super(props);
    this.property = ['width','position'];
  }

  render() {
    return (
      <div onClick={(e) => {
        e.stopPropagation();
        this.props.onClick(this)
        //不assign会报warning 还没搞明白为什么
      }} style={Object.assign({},style.container,this.props.style)}>
        {
          this.props.children
        }
      </div>
    )
  }
}
const style = {
  container:{
    overflow:'hidden',
    width:'600px',
    height:'400px',
  }
};

export default Container