
var saveBtn = $('.saveBtn')
var times = $('.time-block')


$(function () {

var currentTime = dayjs().format("HH")
console.log(currentTime)
times.on('click','.saveBtn',function(event){
    
event.preventDefault()
var description = $(event.target).siblings('.description').val();
console.log(description)
})




})




// class= past,present or future  id = hour-9
// only one present at a time