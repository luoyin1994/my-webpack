import './a.js';
import './b.js';
import _ from 'lodash';
import utils from './js/utils/utils';

console.log('I am File!');

console.log(_.join(['a', 'b', 'c'], '~'));

utils.appendDom('<div>I am Div!</div>', 'body');
utils.appendDom('<p>I am P!</p>', 'body');

