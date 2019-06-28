import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TreeNode from './TreeNode';
import './Worktree.scss';

class Worktree extends PureComponent {
  render() {
    return (
      <ul className="worktree">
        <TreeNode node={this.props.node} />
      </ul>
    );
  }
}

TreeNode.propTypes = {
  node: PropTypes.node.isRequired,
};

export default Worktree;
