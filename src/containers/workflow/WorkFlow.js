import React from 'react';
import './WorkFlow.scss';
import Worktree from '../worktree/Worktree';

let workflow = {
  label: "Workflow создания проекта",
  state: "open",
  children: [
    {
      label: "Выбор дизайна сайта",
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
      label: "Определение основных блоков",
      children: [
        {
          label: "Sub Node3"
        },
        {
          label: "Sub Node4"
        }
      ]
    },
    {
      label: "Верстка статичной версии",
      children: [
        {
          label: "Sub Node3"
        },
        {
          label: "Sub Node3"
        }
      ]
    },
  ]
};

const WorkFlow = () => (
    <Worktree node={workflow} />
)

export default WorkFlow;
