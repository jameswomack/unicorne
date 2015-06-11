module.exports = function(unencodedString) {
  return unencodedString.replace(/[^\x20-\x7E]+/g, function(c) {
    return "\\u" + ('000' + c.charCodeAt(0).toString(16)).substr(-4)
  })
}
