function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  weekdays.forEach(callback)
  return weekdays
}

function doToArray(array, callback) {
  array.forEach(callback)
}
