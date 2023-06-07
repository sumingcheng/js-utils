const dayjs = require('dayjs')

function getDiffWeek(dataStr1, dataStr2) {
  const data1 = dayjs(dataStr1)
  const data2 = dayjs(dataStr2)

  const data1Start = data1.startOf('year')
  const data1Week = data1Start.get("day") || 7
  const subNum = 7 - data1Week + 1

  return (
    Math.ceil((data2.diff(data1Start, 'day') - subNum + 1) / 7) -
    Math.ceil((data1.diff(data1Start, 'day') - subNum + 1) / 7)
  )
}

console.log(getDiffWeek('2023-06-01', '2023-06-05'));
console.log(getDiffWeek('2023-06-02', '2023-06-11'));
console.log(getDiffWeek('2023-06-04', '2023-06-05'));


function formatTimestamp (timestamp) {
  return dayjs(timestamp).format('YYYY-MM-DD')
}

console.log(typeof (formatTimestamp(1685690390886)));

