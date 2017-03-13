require('./a');
require('style-loader!css-loader!./demo.css')

function hello (str) {
    alert('hello ' + str);
}

hello('world!!!');