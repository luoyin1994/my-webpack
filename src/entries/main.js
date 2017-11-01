import '../css/main.css';

// json默认被转化为对象
import testJson from '../../mock/test.json';
import {dev} from '../../config/webpack/webpack.config';

console.log(testJson);

import utils from '../js/utils/utils';

utils.appendDom('<div>I am Div!</div>', 'body');
utils.appendDom('<p>I am P!</p>', 'body');
utils.appendDom('<img src="../img/bird.jpg" height="200">', 'body');

import {cube} from '../js/utils/utils2';

utils.appendDom(`<p>5 cubed is equal to ${cube(5)}</p>`, 'body');

// process存在该文件环境中，没有在window上
if (process.env.NODE_ENV === dev) {
    console.log(process.env);
    console.log('Looks like we are in development mode!');
}

import _ from 'lodash';

console.log(_.join(['a', 'b', 'c'], '-'));