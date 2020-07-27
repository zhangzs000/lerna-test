(function (global, name, factory) {
 'use strict'

 if (typeof exports === 'object' && typeof module !== 'undefined') {
  module.exports = factory()
 // eslint-disable-next-line no-undef
 } else if (typeof define === 'function' && (define.amd || define.cmd)) {
  // eslint-disable-next-line no-undef
  define(factory)
 } else {
  global[name] = factory.apply(this)
 }
}(this, 'deepcopy', function () {
 // eslint-disable-next-line no-unused-vars
 var VERSION = '0.0.2'

 function getRegExp (re) {
  var flags = ''
  if (re.global) flags += 'g'
  if (re.ignoreCase) flags += 'i'
  if (re.multiline) flags += 'm'
  return flags
 };

 function deepcopy (obj) {
  var typeString, newobj
  if (typeof obj !== 'object' && typeof obj !== 'function') {
   // 基本数据类型才返回
   return obj
  }
  typeString = Object.prototype.toString.call(obj)
  switch (typeString) {
  case '[object Array]':
   newobj = []
   break
  case '[object RegExp]':
   newobj = new RegExp(obj.source, getRegExp(obj))
   break
  case '[object Date]':
   newobj = new Date(obj)
   break
  default:
   newobj = {}
          // 处理对象原型，这样也行
          // proto = Object.getPrototypeOf(parent);
          // 利用Object.create切断原型链
          // child = Object.create(proto);
  }
  for (var i in obj) {
   // 递归
   newobj[i] = deepcopy(obj[i])
  }
  return newobj
 }

 return deepcopy
}))
