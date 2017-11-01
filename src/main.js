import './css/main.css';
import utils from './js/utils/utils';

const DOM = (() => {
    return {
        body: document.querySelector('body'),
    };
})();

function createButton() {
    let button       = document.createElement('button');
    button.onclick   = e => {
        import(/* webpackChunkName: "b" */ './js/vendor/b.js').then(
            module => {
                console.log(module.default);
            });
    };
    button.innerHTML = '点击加载 b.js';
    return button;
}

let button = createButton();
DOM.body.appendChild(button);

