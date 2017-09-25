/**
 * Created by chinayangzhan on 2017/9/23.
 */

import React, {Component} from 'react'
import TextField from 'material-ui/TextField';

class Width extends Component {
  render() {
    return (
      <div>
        <TextField hintText="宽度" onBlur={(event) => {
          if(event.target.value){
            this.props.onChange('width', event.target.value)
          }
        }}/>
        <TextField hintText="高度" onBlur={(event) => {
          if(event.target.value){
            this.props.onChange('height', event.target.value)
          }
        }}/>
      </div>
    )
  }
}

export default Width