import React from "react";
import "./WorkFlow.scss";
import Worktree from "../worktree/Worktree";

let workflow = {
  label: "Workflow создания проекта",
  state: "open",
  children: [
    {
      label: "Выбор дизайна сайта",
      children: [
        {
          label: "В качестве образца взят шаблон сайта 2019 года - Metronal"
        }
      ]
    },
    {
      label: "Определение основных блоков",
      children: [
        {
          label: "Шапка с именем и должностью"
        },
        {
          label: "Sidebar c аватаркой"
        },
        {
          label: "Блок основного контента"
        }
      ]
    },
    {
      label: "Верстка статичной версии",
      children: [
        {
          label: "Подход Desktop-first"
        },
        {
          label: "Для верстки использована css библиотека reactstrap"
        }
      ]
    },
    {
      label: "State в динамичных данных"
    },
    {
      label: "Загрузка на сервер",
      children: [
        {
          label: "frontend.webexcel.ru"
        }
      ]
    },
    {
      label: "Доработки",
      children: [
        {
          label: "Подключение EsLint"
        },
        {
          label: "Добавление key в списки"
        }
      ]
    },
    {
      label: "Подключение Redux",
      children: [
        {
          label: "Приложение с использованием Redux"
        }
      ]
    }
  ]
};

const WorkFlow = () => <Worktree node={workflow} />;

export default WorkFlow;
