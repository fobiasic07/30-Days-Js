// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const now = new Date();
const year = now.getFullYear();

const underNineteen = people.some(person => ((year - person.year) > 19));
console.log(underNineteen);

// Array.prototype.every() // is everyone 19 or older?
const overNineteen = people.every(person => ((year - person.year) > 19));
console.log(overNineteen);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const correctComment = comments.find(comment => comment.id === 823423);
console.log(correctComment);


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteComment = comments.findIndex(comment => comment.id === 823423);
console.table(deleteComment);

//deleteComment is the index position of the comment to be deleted

//comments.splice(deleteComment, 1); //One way to delete comment/item from array
//console.log(comments);

//Another way to delete the comment from the array as below
const newComments = [
  ...comments.slice(0, deleteComment),//spread items into the array, so, it doesn't form a 2-object array
  ...comments.slice(deleteComment + 1)
];

console.log(newComments);