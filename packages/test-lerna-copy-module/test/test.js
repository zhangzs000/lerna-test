/**
 * mocha test
 * 单元测试（unit testing），是指对软件中的最小可测试单元进行检查和验证。
 */

var deepcopy = require('../dist/copy.min.js');
const assert = require('assert');
// expect() 风格的断言
var expect = require('expect.js');

// console.log('deepcopy: ',deepcopy)
describe('Test Utility', function () {

  it('the array deep copy...', function () {

      var arr = [1, {a:1},2]
      var copyArr = deepcopy(arr);
      arr[1]['a'] = 2
      expect(copyArr[1]['a']).not.to.equal(2);
      
      // var reg = new RegExp(/\w/,'ig');
      // var copyReg = deepcopy(reg)
      // expect(reg).to.equal(copyReg);

      var d1 = new Date()
      var copyD1 = deepcopy(d1)
      expect(d1.getTime()).to.equal(copyD1.getTime());

      // var obj = {a:{a1:{a2:1}},b:1}
      // var copyObj = deepcopy(obj)
      // obj['a']['a1']['a2']=2
      // expect(copyArr['a']['a1']['a2']).not.to.equal(2);

  });

  it('the date deep copy...', function () {

    // var reg = new RegExp(/\w/,'ig');
    // var copyReg = deepcopy(reg)
    // expect(reg).to.equal(copyReg);

    var d1 = new Date()
    var copyD1 = deepcopy(d1)
    expect(d1.getTime()).to.equal(copyD1.getTime());

    // var obj = {a:{a1:{a2:1}},b:1}
    // var copyObj = deepcopy(obj)
    // obj['a']['a1']['a2']=2
    // expect(copyArr['a']['a1']['a2']).not.to.equal(2);

 });

 it('the obj deep copy...', function () {

  // var reg = new RegExp(/\w/,'ig');
  // var copyReg = deepcopy(reg)
  // expect(reg).to.equal(copyReg);

    var obj = {a:{a1:{a2:1}},b:1}
    var copyObj = deepcopy(obj)
    obj['a']['a1']['a2']=2
    expect(copyObj['a']['a1']['a2']).not.to.equal(2);

  });


})