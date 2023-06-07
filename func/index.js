// 函数执行指定次数
function repeat (fn, times, delay) {
  let counter = 0
  const intervalId = setInterval(() => {
    if (counter >= times) {
      clearInterval(intervalId)
    } else {
      fn()
      counter++
    }
  }, delay)
}
