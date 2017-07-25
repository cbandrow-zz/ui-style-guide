$('.tab').on('click', (e) =>{
  $('.tab').removeClass('selected-tab')
  $('.accordian-content').removeClass('selected-content')

  $(`#${e.target.id}`).toggleClass('selected-tab')
  console.log(e.target.id)

  switch (e.target.id) {
    case 'tab-one':
      $(`#content-one`).toggleClass('selected-content')
      break
    case 'tab-two':
      $(`#content-two`).toggleClass('selected-content')
      break
    case 'tab-three':
      $(`#content-three`).toggleClass('selected-content')
      break
    case 'tab-four':
      $(`#content-four`).toggleClass('selected-content')
      break
    default :
      $(`.accordiant-content`).removeClass('selected-content')
  }
})

$('.header-container').on('click', (e) =>{
  if($(window).width() < 769){
    $('.header-drawer').toggleClass('header-drawer-visible')
  }
})
