
var saveBtn = $('.saveBtn')
var times = $('.time-block')
var schedule = $('.container-lg')

$(function () {
console.log(schedule.children('div'))
currentTime = dayjs().format('HH')
for(var i = 0; i < 9; i++){
if(schedule.children('div').eq(i).attr('id') < "hour-"+currentTime){
    schedule.children('div').eq(i).addClass('past')
    
}else if(schedule.children('div').eq(i).attr('id')> "hour-"+currentTime){
    schedule.children('div').eq(i).addClass('future')
    console.log(schedule.children('div').eq(i).attr('id'))
}else{
    schedule.children('div').eq(i).addClass('present')
}
}
console.log(currentTime)
// for(var i = 9; i<= 17; i++){
   //hour[i].textarea.textContent = localStorage.getItem('hour-',JSON.parse()) 
// }
times.on('click','.saveBtn',function(event){
event.preventDefault()
// this is the button sibling <textarea input
var description = $(event.target).siblings('.description').val();
var toSave = $(event.target).parent('div');
console.log(toSave.attr('id'))

if(toSave.attr('id') == 'hour-09'){
    localStorage.setItem('hour-09',description)
}else if(toSave.attr('id') == 'hour-10'){
    localStorage.setItem('hour-10',description)
}else if(toSave.attr('id') == 'hour-11'){
    localStorage.setItem('hour-11',description)
}else if(toSave.attr('id') == 'hour-12'){
    localStorage.setItem('hour-12',description)
}else if(toSave.attr('id') == 'hour-13'){
    localStorage.setItem('hour-13',description)
}else if(toSave.attr('id') == 'hour-14'){
    localStorage.setItem('hour-14',description)
}else if(toSave.attr('id') == 'hour-15'){
    localStorage.setItem('hour-15',description)
}else if(toSave.attr('id') == 'hour-16'){
    localStorage.setItem('hour-16',description)
}else if(toSave.attr('id') == 'hour-17'){
    localStorage.setItem('hour-17',description)
}

})

console.log("hour-"+10)


})




// class= past,present or future  id = hour-9
// only one present at a time