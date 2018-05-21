function Vue (options) {
  this._init(options)
}  

Vue.prototype._init = function (options) {
  const { el, data } = options
  const $el = document.querySelector(el)
  console.log($el)
}


window.Vue = Vue