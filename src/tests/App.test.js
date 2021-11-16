// import { render, screen } from '@testing-library/react';
// import App from '../App';
import ReactDOM from 'react-dom';

let container = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
});