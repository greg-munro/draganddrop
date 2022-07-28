// let whatIsClicked = window.addEventListener('click', () => {
//   console.log('clicked')
// })

dragElement(document.getElementById('mydiv')) ||
dragElement(document.getElementById('mydiva')) ||
dragElement(document.getElementById('mydivb')) ||
dragElement(document.getElementById('mydivc')) ||
dragElement(document.getElementById('mydivd')) ||
dragElement(document.getElementById('mydive'))

function dragElement (elmnt) {
  let pos1 = 0
  let pos2 = 0
  let pos3 = 0
  let pos4 = 0
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown
  } 

  function dragMouseDown (e) {
    e = e || window.event
    e.preventDefault()
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  function elementDrag (e) {
    e = e || window.event
    e.preventDefault()

    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + 'px'
    elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px'
  }

  // stop moving when mouse button is released:
  function closeDragElement () {
    document.onmouseup = null
    document.onmousemove = null
  }
}
