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
            <li>Создание интерактивного приложения</li>
        </ol>
    </div>
  )

export default WorkFlow;