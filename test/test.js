var
  Assert = require('assert'),
  unicorne = require('../')

describe('unicorne', () => {
  var message = 'La proprietà [{0}] della classe [{1}] con valore [{2}] non è un URL valido'
  var expectation = 'La propriet\\u00e0 [{0}] della classe [{1}] con valore [{2}] non \\u00e8 un URL valido'
  it('should convert italian to a JSON-compatible string', () => {
    var conversion = unicorne(message)
    Assert.equal(conversion, expectation, 'string was converted properly')
  })
})
