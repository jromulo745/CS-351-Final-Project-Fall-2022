//----------------------------------------------------------------------

const button_orange = document.querySelector('#orange');
const button_blue = document.querySelector('#blue');
const button_green = document.querySelector('#green');
const button_red = document.querySelector('#red');
const button_grey = document.querySelector('#grey');

const button_login_submit = document.querySelector('#button_login');

//----------------------------------------------------------------------

button_orange.addEventListener('click', updateColorOrange);
button_blue.addEventListener('click', updateColorBlue);
button_green.addEventListener('click', updateColorGreen);
button_red.addEventListener('click', updateColorRed);
button_grey.addEventListener('click', updateColorGrey);

button_login_submit.addEventListener('click', verifyLogin);

//----------------------------------------------------------------------

function updateColorOrange() {
  let color = '#' + (0xd66d04).toString(16);
  document.querySelector('html').style.backgroundColor=color; // variation of orange
}

//----------------------------------------------------------------------

function updateColorBlue() {
  let color = '#' + (0x226bfe).toString(16);
  document.querySelector('html').style.backgroundColor=color; // variation of blue
}

//----------------------------------------------------------------------

function updateColorGreen() {
  let color = '#' + (0x1fa210).toString(16);
  document.querySelector('html').style.backgroundColor=color; // variation of green
}

//----------------------------------------------------------------------

function updateColorRed() {
  let color = '#' + (0xc30000).toString(16);
  document.querySelector('html').style.backgroundColor=color; // variation of red
}

//----------------------------------------------------------------------

function updateColorGrey() {
  let color = '#' + (0xa9a9a9).toString(16); // variation of grey
  document.querySelector('html').style.backgroundColor=color;
}

//----------------------------------------------------------------------

function verifyLogin() {
  if ((document.querySelector('#user_input').value === 'User') && (document.querySelector('#pass_input').value === 'Pass')) {
    window.location.href="https://blog.playstation.com/2022/11/02/playstation-vr2-launches-in-february-at-549-99/";
  }
  else {
    alert("try again");
  }
}

//----------------------------------------------------------------------
