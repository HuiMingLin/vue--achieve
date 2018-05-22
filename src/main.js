import Modules from './index.js'

const myModules = Modules() 

myModules.define('bar', [], function () {
  function hello (who) {
    return  'let me introduce: ' + who
  } 

  return {
    hello: hello
  }
})

myModules.define('foo', ['bar'], function (bar) {
  var hungry = 'hippo'
  function awesome () {
    console.log( bar.hello(hungry).toUpperCase() )
  }

  return {
    awesome: awesome
  }
})

var bar = myModules.get('bar')
console.log(bar.hello('hippo'))
var foo = myModules.get('foo')
// console.log(foo)
foo.awesome('hippo')


var li = document.getElementsByTagName('li')
for (let i = 0; i < li.length; i++) {
  li[i].onclick = function (argument) {
    console.log(i)
  }
}
function Vue (options) {
  this._init(options)
}  

Vue.prototype._init = function (options) {
  const { el, data } = options
  const $el = document.querySelector(el)
  console.log($el)
}


window.Vue = Vue