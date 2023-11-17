
var saveBtn = $('.saveBtn')
var description = $('.description')
var times = $('.time-block')


$(function () {

var currentTime = dayjs().format("HH")
console.log(currentTime)
saveBtn.on('click') 
if(notice.matches("hour-9")){
    setLocalStorage("9AM",)
}


// class= past,present or future  id = hour-9
// only one present at a time