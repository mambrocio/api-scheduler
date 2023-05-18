
// let startStand = dayjs().startOf('date').format('h a');
// console.log(startStand)

// let endStand = dayjs().endOf('date').format('h a');
// console.log(endStand)

// function standHours(){
//   for(var i = startStand; i <= endStand; i++){
//     console.log(i);
//   }
// }
// standHours()

// let timeBlocks = $('#timeBlocks');
// let desc = $('input[name="descriptions"]');


$(function() {

let today = dayjs();
let dayWeek = today.format(' dddd [Schedule]' );
$('#open-schedule-24').text(dayWeek + ' 24 hour format');

let currentHour = dayjs().format('H');
console.log(currentHour)

let hourCheck = document.getElementsByClassName('hour').value;
console.log(hourCheck == currentHour)

$('#currentDay').text(today.format('MMM D, YYYY'));
$('#currentTime').text('Current Time is ' + today.format('hh:mm a or HH:mm'));


let startHour = dayjs().startOf('date').format('H'); //start of the clock 24 hour time
let endHour = dayjs().endOf('date').format('H'); //end of the start 

  function div24Hours(){
    let hour24Div = document.createDocumentFragment();
    for (var i = startHour; i <= endHour; i++){
      let hour = document.createElement('div');
      hour.id =  i;
      hour.className = 'col-2 col-md-1  text-center py-3';
      hour.innerHTML = i;
      let textBox = document.createElement('textarea');
      textBox.className = 'col-8 col-md-10';
      textBox.name = 'descriptions';
      textBox.row = 3;
      let buttonSave = document.createElement('button');
      buttonSave.className = 'btn saveBtn col-2 col-md-1';
      buttonSave.innerHTML = '<i class="fas fa-save copied" aria-hidden="true"></i>';
      
      hour24Div.appendChild(hour);
      hour24Div.appendChild(textBox);
      hour24Div.appendChild(buttonSave);
    }
  $('#timeBlocks24').append(hour24Div);
  }


let Today = dayjs();
let DayWeek = Today.format(' dddd [Schedule]' );
$('#open-schedule-12').text(DayWeek + ' 12 hour format');



function div12Hours(){
    let hour12Div = document.createDocumentFragment();
    for (var j = startHour; j <= endHour; j++){
      let Hour = document.createElement('div');
      Hour.id = j +'H'
      Hour.className = 'col-2 col-md-1  text-center py-3';
      HourMath = ((j+ 11) % 12 + 1);
      Hour.innerHTML = HourMath
      let TextBox = document.createElement('textarea');
      TextBox.className = 'col-8 col-md-10';
      TextBox.name = 'descriptions';
      TextBox.row = 3;
      let ButtonSave = document.createElement('button');
      ButtonSave.className = 'btn saveBtn col-2 col-md-1';
      ButtonSave.innerHTML = '<i class="fas fa-save copied" aria-hidden="true"></i>';
      
      hour12Div.appendChild(Hour);
      hour12Div.appendChild(TextBox);
      hour12Div.appendChild(ButtonSave);
    }

    $('#timeBlocks12').append(hour12Div);
  }
  // function compareHours(){
  //   if (hourCheck < currentHour ){
  //     document.getElementsByClassName("hour").className += 'past';
  //   } else if(hourCheck > currentHour){
  //     document.getElementsByClassName("hour").className += 'future';
  //   } else{
  //     document.getElementsByClassName("hour").className += 'present';
  //   }
  // }
function hourColor(){
    
}
  hourColor();
  div24Hours();
  div12Hours();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
