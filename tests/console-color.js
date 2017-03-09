'use strict';
let chai = require('chai')
  , expect = chai.expect
  , console = require('./../src/console-color');


describe('Log', function() {
  it('console.log should be a function', function() {
    expect(typeof console.log).to.equal('function');
  })
});

describe('Log colors', function() {
  ['Black','Red','Green','Yellow','Blue','Magenta','Cyan','White','Crimson'].forEach(function(colorName){
    it('console.log'+colorName+' should be a function', function() {
      expect(typeof console['log'+colorName]).to.equal('function');
    })
  })
});

describe('Colors', function() {
  ['black','red','green','yellow','blue','magenta','cyan','white','crimson'].forEach(function(colorName){
    it('console.'+colorName+' should be a function', function() {
      expect(typeof console[colorName]).to.equal('function');
    })
  })
});

describe('Bg colors', function() {
  ['black','red','green','yellow','blue','magenta','cyan','white','crimson'].forEach(function(colorName){
    it('console.bg.'+colorName+' should be a function', function() {
      expect(typeof console.bg[colorName]).to.equal('function');
    })
  })
});

describe('Text must match', function() {
  let textToBeMatched = 'some random text';
  ['black','red','green','yellow','blue','magenta','cyan','white','crimson'].forEach(function(colorName){
    it('console.'+colorName+'('+textToBeMatched+') should be match content "'+textToBeMatched+'"', function() {
      expect(console[colorName](textToBeMatched).indexOf(textToBeMatched) >= 0).to.equal(true);
    })
  })
});