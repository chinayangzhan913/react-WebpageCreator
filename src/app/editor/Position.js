/**
 * Created by chinayangzhan on 2017/9/23.
 */

import React, {Component} from 'react'
import TextField from 'material-ui/TextField';

class Position extends Component {
  render() {
    return (
      <div>
        <TextField hintText="X" onBlur={(event) => {
          if(event.target.value){
            this.props.onChange('top', event.target.value)
          }
        }}/>
        <TextField hintText="Y" onBlur={(event) => {
          if(event.target.value){
            this.props.onChange('left', event.target.value)
          }
        }}/>
      </div>
    )
  }
}

export default Position