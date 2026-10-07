let x = 0;
function addnumber() {
  return x++;
}
function resetnumber(){
  return x=0;
}
function minusnumber(){
  return x--;


}
const numDispaly = document.getElementById('countedNo');
const addButton = document.getElementById('addButton');
const resetNumber = document.getElementById('resetButton');
const minusNumber = document.getElementById('minusButton');
 function checkColor(){
    if (x<0){
numDispaly.style.color = 'red'
    }
    else if (x>0){
      numDispaly.style.color='green'
    }
    else {
      numDispaly.style.color='white'
    }
  }
addButton.addEventListener('click', () => {
  addnumber();
  numDispaly.textContent =x
  checkColor();
});

resetButton.addEventListener('click', () => {
  resetnumber();
  numDispaly.textContent =x
  checkColor();
});
minusButton.addEventListener('click', () => {
  minusnumber();
  numDispaly.textContent =x
  checkColor();
});