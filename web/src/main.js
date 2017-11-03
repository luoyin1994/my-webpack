import './css/main.css';
import utils from './js/utils/utils';

const DOM = (() => {
    return {
        body: document.querySelector('body'),
    };
})();

function createButton() {
    let button = document.createElement('button');
    // webpack 1
    // button.onclick = e => {
    //     require.ensure([], function(require) {
    //         var module = require('./js/vendor/b.js');
    //         console.log(module.default);
    //     }, 'b');
    // };

    button.onclick   = e => {
        import(/* webpackChunkName: "b" */ './js/vendor/b.js').then(
            module => {
                console.log(module.default);
            });
    };
    button.innerHTML = '点击加载 b.js';
    return button;
}

function createImg(options) {
    let img = document.createElement('img');
    Object.assign(img, options);
    return img;
}

let img = createImg({src: require('./img/bird.jpg')});
DOM.body.appendChild(img);

let button = createButton();
DOM.body.appendChild(button);

