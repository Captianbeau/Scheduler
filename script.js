// query selectors
var saveBtn = $('.groupBtn')
var times = $('.time-block')
var schedule = $('.container-lg')
var today = $('#currentDay')

// getting items from storage
var ninthHour = localStorage.getItem('hour-09')||''
var tenthHour = localStorage.getItem('hour-10')||''
var eleventhHour = localStorage.getItem('hour-11')||''
var twelfthHour = localStorage.getItem('hour-12')||''
var thirteenthHour = localStorage.getItem('hour-13')||''
var fourteenthHour =localStorage.getItem('hour-14')||''
var fifteenthHour = localStorage.getItem('hour-15')||''
var sixteenthHour = localStorage.getItem('hour-16')||''
var seventeenthHour = localStorage.getItem('hour-17')||''

// $function start
$(function () {
//  
today.text(dayjs().format('dddd MMM D YYYY'))

currentTime = dayjs().format('HH')
for(var i = 0; i < 9; i++){
if(schedule.children('div').eq(i).attr('id') < "hour-"+currentTime){
    schedule.children('div').eq(i).addClass('past')
    
}else if(schedule.children('div').eq(i).attr('id')> "hour-"+currentTime){
    schedule.children('div').eq(i).addClass('future')
   
}else{
    schedule.children('div').eq(i).addClass('present')
}
}
schedule.children('div').eq(0).children('textarea').val(ninthHour);
schedule.children('div').eq(1).children('textarea').val(tenthHour);
schedule.children('div').eq(2).children('textarea').val(eleventhHour);
schedule.children('div').eq(3).children('textarea').val(twelfthHour);
schedule.children('div').eq(4).children('textarea').val(thirteenthHour);
schedule.children('div').eq(5).children('textarea').val(fourteenthHour);
schedule.children('div').eq(6).children('textarea').val(fifteenthHour);
schedule.children('div').eq(7).children('textarea').val(sixteenthHour);
schedule.children('div').eq(8).children('textarea').val(seventeenthHour);

times.on('click','.saveBtn',function(event){
event.preventDefault()

var description = $(event.target).siblings('.description').val();
var toSave = $(event.target).parent('div');


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

})




