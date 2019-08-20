var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(){
  chocolateBars.push("cat");
  var chocolateBars = ["cat", ...chocolateBars]
}