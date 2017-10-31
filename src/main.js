import './a.js';
import './b.js';

import _ from 'lodash';
import utils from './js/utils/utils';

import './css/main.css';

// json默认被转化为对象
import testJson from '../mock/test.json';
console.log(testJson);

console.log('I am File!');

console.log(_.join(['a', 'b', 'c'], '~'));

utils.appendDom('<div>I am Div!</div>', 'body');
utils.appendDom('<p>I am P!</p>', 'body');
utils.appendDom('<img src="img/bird.jpg" height="200">', 'body');

