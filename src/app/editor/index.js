/**
 * Created by chinayangzhan on 2017/9/23.
 */

import React from 'react'
import Position from './Position'
import Width from './Width'

class EditorBuilder {
  static build = (property, styleChangeCallBack, index) => {
    let key = index ? index : 0;
    let MyComponent = EditorRegister[property];
    return (
      <MyComponent onChange={styleChangeCallBack} key={key}/>
    )
  }
}

export const EditorRegister = {
  'position': Position,
  'width': Width
};

export default EditorBuilder