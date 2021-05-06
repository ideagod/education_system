// util
//得到时间格式2018-10-02
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getThisWeek() {
  var thisWeek = [];
  var show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  var today = new Date();
  var day = today.getDay();
  var tempDay = today;
  var dayFormate = "";
  var date = tempDay.getDate();

  for (var i = 0; i < 5; i++) {
    tempDay.setDate(date - day + 1 + i);
    dayFormate = (tempDay.getDate() < 10 ? ("0" + tempDay.getDate()) : tempDay.getDate());

    var dayInfo = {};
    dayInfo.day = dayFormate;
    dayInfo.week = show_day[tempDay.getDay()];

    thisWeek.push(dayInfo);
  }
  return thisWeek;
}
//todate默认参数是当前日期，可以传入对应时间 todate格式为2018-10-05
function getDates(days, today) {
  var dateArry = [];
  for (var i = 0; i < days; i++) {
    var dateObj = dateLater(today, i);
    dateArry.push(dateObj)
  }
  return dateArry;
}
function dateLater(dates, later) {
  let dateObj = {};
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate() + later);
  let day = date.getDay();
  let dayFormate = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
  dateObj.time = dayFormate;
  dateObj.week = show_day[day];
  return dateObj;
}

module.exports = {
  formatDate: formatDate,
  getDates: getDates,
  getThisWeek: getThisWeek
}