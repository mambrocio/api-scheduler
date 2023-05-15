// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let today = dayjs();
let dayWeek = today.format(' dddd [Schedule]' );
$('.dayOne').text(dayWeek);


let startHour = dayjs().startOf('date').format('H'); //start of the clock 24 hour time
let endHour = dayjs().endOf('date').format('H'); //end of of the clock 24 hour time

// let copiedSelect = document.querySelectorAll('section.copyHours > div'),
//   copiedSect = document.getElementsByClassName("copied");

//   let cloned = copiedSelect.cloneNode(true);
//   copiedSect.appendChild(cloned)



  // var s = document.getElementById("source"),
  //     d = document.getElementById("destination");
  
  // // (C2) CREATE & APPEND EVIL CLONE
  // var clone = s.cloneNode(true);
  // clone.removeAttribute("id");
  // d.appendChild(clone);


function hourArray(){
let textHours = '';
let hourArray = [];
for( i = startHour; i <= endHour; i++){
    textHours += i 
    theHours = hourArray.concat(i)
    console.log(theHours)
  }
  return theHours
}


function divHours(){
  let addingDiv = document.createDocumentFragment();
  for (var i = startHour; i <= endHour; i++){
    let test = document.createElement('div');
    test.id =  i;
    test.className = 'newHour';
    test.innerHTML = theHours;
    addingDiv.appendChild(test);
  }

$('#testarea').append(addingDiv);
}

hourArray()
divHours()
$(function () {

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
