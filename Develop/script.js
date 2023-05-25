$(function() {


let today = dayjs(); // Initiate dayjs() library
let dayWeek = today.format(' dddd [Schedule]' ); // Format date that gets printed
$('#open-schedule-24').text(dayWeek + ' 24 hour format'); // Labels the schedule type

let currentHour = dayjs().format('H');  // A way to schedule the time

$('#currentDay').text(today.format('MMM D, YYYY')); // A display of the day
$('#currentTime').text('Current Time is ' + today.format('h:mm a or H:mm')); // A display of the hour

let startHour = dayjs().startOf('date').format('H'); //start of the clock 24 hour time
let endHour = dayjs().endOf('date').format('H'); //end of the 24 clock hour

let shiftType;
let saveBtn;



//Generates the divs of the 24 hour time clock 
  function div24Hours(){
    let hour24Div = document.createDocumentFragment(); // Action that creates the divs
    for (var i = startHour; i <= endHour; i++){ // For loop using the 24 hour time. 
                                                // With it, generating the time and limited by the end scope of the loop
      let hour = document.createElement('div'); // Create div
      hour.id =  i; // Sets id by using i  
      hour.className = 'col-2 col-md-1 text-center py-3'; // Using Bootstrap elements to 
      hour.innerHTML = i; // Displays the hour 
      let textBox = document.createElement('textarea'); // Action that creates a text-area
      textBox.className = 'col-8 col-md-10 hour'; // Sets class through bootstrap
      textBox.name = 'descriptions'; // Sets a name for the input 
      textBox.row = 3; // Sets amount for height of the text box
      let buttonSave = document.createElement('button'); // Creates a button element
      buttonSave.className = 'btn saveBtn col-2 col-md-1'; // Sets class through bootstrap
      buttonSave.innerHTML = '<i class="fas fa-save copied" aria-hidden="true"></i>'; // Gives the button a style attribute with an icon


      // If/Else statement that applies a certain attributed style
      if (i < currentHour){ // If the 'i' is less than the current hour sets a past value of the past
        $(textBox).addClass('past')
      } else if (i > currentHour){
        $(textBox).addClass('future') // If the 'i' is equal than the current hour sets a past value of the future
      } else
      $(textBox).addClass('present') //  If the 'i' is less  the current hour sets a past value of the 

      hour24Div.appendChild(hour); 
      hour24Div.appendChild(textBox);
      hour24Div.appendChild(buttonSave);
    }

  $('#timeBlocks24').append(hour24Div); // Generates the element loop to the div 

  shiftType = document.querySelectorAll(".hour"); //Grabs the hour block 


  $('.saveBtn').on( "click", function() { //Button function that 
    shiftSaved();
  } );
  
  }


  //Similar format for the top value but for the 12 hour div
let Today = dayjs();
let DayWeek = Today.format(' dddd [Schedule]' );
$('#open-schedule-12').text(DayWeek + ' 12 hour format');



function div12Hours(){

  //Similar code structure to the 24 hour structure. 
    let hour12Div = document.createDocumentFragment();
    for (var j = startHour; j <= endHour; j++){
      let Hour = document.createElement('div');
      Hour.id = j + 0;
      Hour.className = 'col-2 col-md-1  text-center py-3';
      HourMath = ((j+ 11) % 12 + 1); //Math from a stack exchange page I got: 
      https://stackoverflow.com/questions/4898574/converting-24-hour-time-to-12-hour-time-w-am-pm-using-javascript
      Hour.innerHTML = HourMath
      let TextBox = document.createElement('textarea');
      TextBox.className = 'col-8 col-md-10 hour';
      TextBox.name = 'descriptions';
      TextBox.row = 3;
      let ButtonSave = document.createElement('button');
      ButtonSave.className = 'btn SaveBtn col-2 col-md-1';
      ButtonSave.innerHTML = '<i class="fas fa-save copied" aria-hidden="true"></i>';
      
      if (j < currentHour){
        $(TextBox).addClass('past')
      } else if (j > currentHour){
        $(TextBox).addClass('future')
      } else
      $(TextBox).addClass('present')


      hour12Div.appendChild(Hour);
      hour12Div.appendChild(TextBox);
      hour12Div.appendChild(ButtonSave);
  }

  $('#timeBlocks12').append(hour12Div);
}

function shiftSaved(){ //function parses through the text area
  let ShiftTask = {};
  console.log("function called")
  for (i = 0; i < shiftType.length; i++ ){

    var comment = shiftType[i].value.trim()
  

    if (comment){
      ShiftTask[i] = comment;
    } 
  }
  localStorage.setItem("ShiftTask", JSON.stringify(ShiftTask)); //stores into a local storage to turn into a string
}


function renderShift(){ //renders the shift 
  let finalShift = (localStorage.getItem("ShiftTask"));
  console.log(finalShift)
  if (finalShift){
    finalShift = JSON.parse(finalShift)
    for (i = 0; i < shiftType.length; i++ ){
      if (finalShift[i]) //checks to see if each text area and its assigned div will be populated
      shiftType[i].value = finalShift[i];
    } 
  }
}

function init() {
   renderShift(); //This is where the shift will be rendered and called
}


  div24Hours();
  div12Hours();
  init();
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
