const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

function createSquare(classname){
  let newSquare = document.createElement('div')
  
  newSquare.classList.add('displayedsquare', classname.split(' ')[1])
  
  document.querySelector('.displayedsquare-wrapper').appendChild(newSquare)
  
  createConsole(classname.split(' ')[1])
  
  newSquare.addEventListener('click', function(){
  alert(`La couleur de ce carré est ${classname.split(' ')[1]}`)
  })
  }
  
  function createConsole (color){
  let newLi = document.createElement('li')
  
  let hour = new Date().toLocaleString();
  
  newLi.textContent = `[${hour}] Un nouveau carre ${color} a été créé !`
  
  document.querySelector('ul').appendChild(newLi)
  }
  
  document.querySelectorAll('.actionsquare').forEach(square =>{
  square.addEventListener('click', function(){
  let className = this.className
  
  createSquare(className)
  })
  })
  
  function getRandomColor(){
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }
  
  function SpaceBar(event){
  if (event.keyCode === 32){
  const randomColor = getRandomColor()
  
  document.body.style.backgroundColor = randomColor
  }
  
  let newLi2 = document.createElement('li')
  
  let hour = new Date().toLocaleString();
  
  newLi2.textContent = `[${hour}] Une nouvelle couleur d'arrière plan a été créée !`
  
  document.querySelector('ul').appendChild(newLi2)
  }
  
  document.addEventListener('keydown', SpaceBar)
  
  function clearConsole(){
  let log = document.querySelector('li')
  
  while (log.firstChild){
  log.removeChild(log.firstChild)
  }
  }
  
  document.addEventListener('keydown', function(event){
  if (event.keyCode === 73){
  
  clearConsole()}
  })
  
  function deleteSquare(){
  
  let noSquare = document.querySelector('.displayedsquare-wrapper')
  
  while (noSquare.firstChild){
  noSquare.removeChild(noSquare.firstChild)
  }
  }
  
  document.addEventListener('keydown', function(event){
  if (event.keyCode === 83){
  deleteSquare()
  }
  })
  
  
  