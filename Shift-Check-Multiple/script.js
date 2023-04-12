//Model
const checkboxes = document.querySelectorAll('.box input[type="checkbox"]');
let lastChecked;

//View
function handleCheck(e){
  //Check if shift key is down
  //check that they are checking the box
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    //Loop over every single checkbox
    checkboxes.forEach(checkbox => {
      //console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        //console.log("Starting to check them in between");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

//Control
console.log(checkboxes);
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
    
/*
//Model
//Striking through one todo-item
  const task = document.querySelector('.todo-item1');//Make the class of one of the todo-items to be todo-item1
  const taskChildren = Array.from(task.childNodes);
  console.log(taskChildren);

//View
function markAsDone(e) {
  if (e.target.checked) {
    taskChildren[3].style.textDecoration = 'line-through';
    //console.log(taskChildren[3]);
    } else {
      taskChildren[3].style.textDecoration = 'none';
    }
    //console.log(e.target.checked);
    };

//Control
 task.addEventListener('click', markAsDone);
*/    
    
/* //The above commented code plus this below, might be able to help to sort out the inBetween problem tagged in css file
  const tasks = Array.from(document.querySelector('.todo-item'));
  const tasksChildren = Array.from(tasks)
*/
    