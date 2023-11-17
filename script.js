
var saveBtn = $('.saveBtn')
var description = $('.description')
var times = $('.time-block')


$(function () {

var currentTime = dayjs().format("HH")
console.log(currentTime)
saveBtn.on('click',function(event){
var saveTodo = $(event.target)
 localStorage.setItem('hour-9',JSON.stringify($(saveTodo).siblings("textarea").value))
})




})




// class= past,present or future  id = hour-9
// only one present at a time