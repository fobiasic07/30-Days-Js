//Model
const clicked = [];
const secretCode = "debra";

//View
function codeAction(e) {
  clicked.push(e.key);
  clicked.splice(-secretCode.length - 1, clicked.length - secretCode.length);//The first gives position from which it should start deleting(the position from after secretCode.lenth), second gives length it should delete
  console.log(clicked);
  if(clicked.join('').includes(secretCode)){ //.join('') joins the array into a string
    //console.log("You're right");
    cornify_add(); //Partially blocked by chrome, but still gives "alert"
  };
}

//Control
window.addEventListener('keyup', codeAction);