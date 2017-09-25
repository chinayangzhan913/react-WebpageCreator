/**
 * Created by chinayangzhan on 2017/9/23.
 */

import React from 'react'
import Container from './Container'
import Image from './Image'
import Text from './Text'

class ComponentBuilder {
  static build = (component, selectCallBack, index) => {
    let key = index ? index : 0;
    let MyComponent = ComponentRegister[component.name];
    if (component.child && component.child.length) {
      return (
        <MyComponent key={key} id={component.id} style={component.style} onClick={selectCallBack}>
          {
            component.child.map((child, index) => {
              return ComponentBuilder.build(child, selectCallBack, index)
            })
          }
        </MyComponent>
      )
    } else {
      return (
        <MyComponent key={key} id={component.id} style={component.style} onClick={selectCallBack}/>
      )
    }
  }
}

export const ComponentRegister = {
  'container': Container,
  'image': Image,
  'text': Text
};

export default ComponentBuilder