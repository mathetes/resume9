import React from 'react';
import "./Worktree.scss";

class TreeNode extends React.Component{
  constructor(props){
    super(props);
    this.state = props.node;
  }

  toggle(){
    let newState = Object.assign({}, this.state);
    newState.state = this.state.state === 'opener' ? 'closer' : 'opener';
    this.setState(newState);
  }

  getClazz(node){
    if(node && node.children && node.children.length > 0){
      return node.state === 'opener' ? 'opener' : 'closer';
    }
  }

  render(){
    let nodes = this.state.children || [];
    let children = nodes.map((n, idx)=><TreeNode node={n} key={idx}/>);
    if(children.length > 0){
      children = <ul className="worktree">{children}</ul>
    }
    return (
        <li className={this.getClazz(this.state)}>
          <i className="fa" onClick={this.toggle.bind(this)}></i>
          <label>{this.state.label}</label>
          {children}
        </li>
      );
  }
}

class Worktree extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className="worktree">
        <TreeNode node={this.props.node}/>
      </ul>
    );
  }
}

export default Worktree;
