import '../css/main.css';

// json默认被转化为对象
import testJson from '../../mock/test.json';
console.log(testJson);

import utils from '../js/utils/utils';
utils.appendDom('<div>I am Div!</div>', 'body');
utils.appendDom('<p>I am P!</p>', 'body');
utils.appendDom('<img src="../img/bird.jpg" height="200">', 'body');
