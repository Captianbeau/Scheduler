
var saveBtn = $('.saveBtn')
var times = $('.time-block')


$(function () {

var currentTime = dayjs().format("HH")
console.log(currentTime)
times.on('click','.saveBtn',function(event){


event.preventDefault()
// this is the button sibling <textarea input
var description = $(event.target).siblings('.description').val();
var toSave = $(event.target).parent('div');
console.log(toSave.attr('id'))

if(toSave.attr('id') == 'hour-9'){
    console.log("nine hourt")
localStorage.setItem('hour-9',description)
}else if(toSave.attr('id') == 'hour-10'){
    console.log("tenhoue")
localStorage.setItem('hour-10',description)
}

// for(var i = 9; i<= 17; i++){
    
//     hour[i].textarea.textContent = localStorage.getItem('hour-',JSON.parse())
// }
console.log(description)
})




})




// class= past,present or future  id = hour-9
// only one present at a time