import React from 'react';
import './WorkFlow.scss';

const WorkFlow = () => (
    <div>
        <ol
        style={{
            textAlign: "left"
        }}
        >
            <li>Выбор дизайна сайта</li>
            <ul>
                <li>В качестве образца взят шаблон сайта</li>
            </ul>
            <li>Определение основных блоков</li>
            <li>Верстка статичной версии</li>
            <li>Props в статичных данных</li>
                <ul>
                    <li>
                        При клике на должность меняется содержание
                    </li>
                    <li>
                        Должность меняется с заданным интервалом в 3 секунды
                    </li>
                </ul>
            <li>State в динамичных данных</li>

            <li>Создание интерактивного приложения</li>
        </ol>

        Добавить анимацию с помощью
            https://scotch.io/tutorials/create-animated-react-apps-with-react-spring

        Перемещение блоков мышкой
            https://codesandbox.io/s/6n20nrzlxz
        
        Аккордион
            https://codesandbox.io/s/1qo7rylm14
    </div>
  )

export default WorkFlow;