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


        Перемещение блоков мышкой
            https://codesandbox.io/s/6n20nrzlxz

        Аккордион
            https://codesandbox.io/s/1qo7rylm14

        Красивые карточки
            https://codesandbox.io/s/6jlvz1j5q3


    </div>
  )

export default WorkFlow;
