var IS_AUTO_UPDATE = true;
var INTERVAL_ID;
var CHECK_INTERVAL = 15000;

/*
clickUpdateButton():
* click update button.
*/
function clickUpdateButton() {
  let wk_elm;
  wk_elm = document.getElementsByClassName('new-tweets-bar');
  if(wk_elm && wk_elm.length > 0) {
    wk_elm[0].click();
  }
}

function handleKeydown(ev) {
  var code = ev.keyCode;
  switch(code) {
    case 65: //0x41 A
      console.log('A');
      if(IS_AUTO_UPDATE === false) {
        INTERVAL_ID = setInterval(clickUpdateButton, CHECK_INTERVAL);
        browser.runtime.sendMessage({'badge':'on'});
        IS_AUTO_UPDATE = true;
      }
      break;
    case 81: //0x51 Q
      console.log('Q');
      if(IS_AUTO_UPDATE) {
        clearInterval(INTERVAL_ID);
        browser.runtime.sendMessage({'badge':'off'});
        IS_AUTO_UPDATE = false;
      }
      break;
  }
};

function start() {
  document.addEventListener('keydown', handleKeydown);
  INTERVAL_ID = setInterval(clickUpdateButton, CHECK_INTERVAL);
};

start();

