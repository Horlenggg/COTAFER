// var openmodal = document.querySelectorAll('.modal-open')
// let selectedModalTargetId = ''
// for (var i = 0; i < openmodal.length; i++) {
//   openmodal[i].addEventListener('click', function(event){
//     selectedModalTargetId = event.target.attributes.getNamedItem('data-target').value
//     event.preventDefault()
//     toggleModal()
//   })
// }

// const overlay = document.querySelector('.modal-overlay')
// overlay.addEventListener('click', toggleModal)

// var closemodal = document.querySelectorAll('.modal-close')
// for (var i = 0; i < closemodal.length; i++) {
//  closemodal[i].addEventListener('click', toggleModal)
// }

// function toggleModal () {
//  if(!selectedModalTargetId) {
//    return
//  }
//  const body = document.querySelector('body')
//  const modal = document.getElementById(selectedModalTargetId)
//  modal.classList.toggle('opacity-0')
//  modal.classList.toggle('pointer-events-none')
//  body.classList.toggle('modal-active')
// }