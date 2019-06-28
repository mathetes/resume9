import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Worktree.scss';

class TreeNode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = props.node;
  }

  getClazz(node) {
    if (node && node.children && node.children.length > 0) {
      return this.node.state === 'opener' ? 'opener' : 'closer';
    }
  }

  toggle() {
    const newState = Object.assign({}, this.state);
    newState.state = this.state.state === 'opener' ? 'closer' : 'opener';
    this.setState(newState);
  }

  render() {
    const nodes = this.state.children || [];
    let children = nodes.map((n, idx) => <TreeNode node={n} key={idx} />);
    if (children.length > 0) {
      children = <ul className="worktree">{children}</ul>;
    }
    return (
      <li className={this.getClazz(this.state)}>
        <i className="fa" onClick={this.toggle.bind(this)} />
        <label>{this.state.label}</label>
        {children}
      </li>
    );
  }
}

TreeNode.propTypes = {
  node: PropTypes.node.isRequired
};

export default TreeNode;
