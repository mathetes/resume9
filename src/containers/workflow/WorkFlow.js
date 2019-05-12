import React from 'react';
import './WorkFlow.scss';
import Worktree from '../worktree/Worktree';

let root = {
  label: "Root",
  state: "open",
  children: [
    {
      label: "Node1",
      children: [
        {
          label: "Sub Node1"
        },
        {
          label: "Sub Node1"
        }
      ]
    },
    {
      label: "Node2",
      children: [
        {
          label: "Sub Node3"
        },
        {
          label: "Sub Node4"
        }
      ]
    }
  ]
};

const Workflow = () => (
    <Worktree node={root} />
)


export default Workflow;
