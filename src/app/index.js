import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';

import ComponentBuilder from './component'
import EditorBuilder, {EditorRegister} from './editor'

export default class Page extends Component {
  // 构造
  constructor(props) {
    super(props);
    window.onresize = () => {
      this.setState({
        zoom: zoom()
      })
    };
    // 初始状态
    this.state = {
      selected: null,
      zoom: zoom(),
      page: {
        name: 'container',
        id: '0',
        style: {
          width: '100%',
          height: '100%',
          backgroundColor: '#0f0'
        },
        child: [
          {
            name: 'container',
            id: '0,0',
            style: {
              width: '300px',
              height: '200px',
              backgroundColor: '#00f'
            }
          },
          {
            name: 'container',
            id: '0,1',
            style: {
              width: '600px',
              height: '400px',
              backgroundColor: '#f00'
            }
          },
          {
            name: 'image',
            id: '0,2',
            style: {
              width: '600px',
              height: '400px',
              backgroundColor: '#ff0'
            }
          },
          {
            name: 'text',
            id: '0,3',
            style: {
              width: '600px',
              height: '400px',
              backgroundColor: '#0ff'
            }
          }
        ]
      }
    };
  }

  componentDidMount() {
    this.creatComponent('text')
  }

  selectComponent = (component) => {
    this.setState({
      selected: component
    });
    console.log('select', this, component.property)
  };
  componentStyleChange = (property, value) => {
    let newState = Object.assign({}, this.state.page);
    let path = this.state.selected.props.id.split(",");
    let position = newState;
    if (path.length === 1) {

    } else {
      path.shift();
      for (let i = 0; i < path.length; i++) {
        position = position.child[path[i]]
      }
    }

    position.style[property] = value;
    this.setState({
      page: newState
    });

    console.log(this.state.selected.props);
    console.log(position);
    console.log(property, value)
  };
  creatComponent = (type, parent = '0') => {
    parent = parent.split(",");
    let position = this.state.page;
    for (let i = 0; i < parent.length - 1; i++) {
      position = position.child[parent[i]]
    }

    let newId = parent.join(",") + "," + (position.child.length === 0 ? 0 : position.child.length + 1);
    position.child.push(
      {
        name: type,
        id: newId
      }
    );

    this.setState({page: this.state.page})
  };

  render() {
    style.preview.zoom = this.state.zoom;
    return (
      <div>
        <AppBar
          title="Menu-Creater"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div style={{display: 'flex', paddingTop: '16px', justifyContent: 'space-between'}}>
          <Paper>
            <Menu>
              <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye/>}/>
              <MenuItem primaryText="add dishes" leftIcon={<PersonAdd/>}/>
              <MenuItem primaryText="Get links" leftIcon={<ContentLink/>}/>
              <Divider/>
              <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy/>}/>
              <MenuItem primaryText="Download" leftIcon={<Download/>}/>
              <Divider/>
              <MenuItem primaryText="Remove" leftIcon={<Delete/>}/>
            </Menu>
          </Paper>
          <Paper style={style.preview} zDepth={1}>
            {
              ComponentBuilder.build(this.state.page, this.selectComponent)
            }
          </Paper>
          <Paper style={style.console} zDepth={1}>
            {
              this.state.selected && this.state.selected.property && this.state.selected.property.length ?
                (this.state.selected.property.map((property, index) => {
                  return EditorBuilder.build(property, this.componentStyleChange, index)
                })) : null
            }
          </Paper>
        </div>
      </div>
    )
  }
}

const zoom = () => {
  return (window.innerWidth - 224 - 200 - 32 - 32) / 1920
};

const style = {
  preview: {
    flexShrink: 0,
    width: '1920px',
    height: '1080px',
    background: "red",
    overflow:'scroll',
    position:'relative'
  },
  console: {
    flexShrink: 0,
    width: '200px',
    height: '540px',
  }
};
