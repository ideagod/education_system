const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


const formatTimeWithoutHMS = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/')
}

const formatDate = s => {
  s = s.replace("T", " ");
  console.log(s);
}

const convertDateFormatToMDY = dateStringInYMD => {

  var dateArray = dateStringInYMD.split("-")

  var year = dateArray[0]
  var month = dateArray[1]
  var day = dateArray[2]

  return month + '-' + day + '-' + year
}

const handleCookieFromSetCookie = cookieArray => {

  function regrexForFirstSemicolon(setCookieString) {
    // regrex = /.+?(?<=;)/
    var regrex = /(.+?);/
    return regrex.exec(setCookieString)[0]
  }

  return cookieArray.map(regrexForFirstSemicolon).reduce((x, y) => {
    return x + y
  })
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  formatTimeWithoutHMS: formatTimeWithoutHMS,
  convertDateFormatToMDY: convertDateFormatToMDY,
  handleCookieFromSetCookie: handleCookieFromSetCookie
}


