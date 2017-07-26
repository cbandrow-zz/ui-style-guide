var eventFired = 0;

$(window).resize(()=>{
  if ($(window).innerWidth() > 539){
    eventFired = 0;
    $(`.mobile-tab1`).removeClass('selected-mobile')
    $(`.mobile-tab2`).removeClass('selected-mobile')
    $(`.mobile-tab3`).removeClass('selected-mobile')
    $(`.mobile-tab4`).removeClass('selected-mobile')

    switch ($('.selected-tab').attr('id')){
      case 'tab-one':
        $(`#content-one`).addClass('selected-content')
        break
      case 'tab-two':
        $(`#content-two`).addClass('selected-content')
        break
      case 'tab-three':
        $(`#content-three`).addClass('selected-content')
        break
      case 'tab-four':
        $(`#content-four`).addClass('selected-content')
        break
      default :
        $(`.accordiant-content`).addClass('selected-content')
    }
  } else if ($(window).innerWidth() < 538 && eventFired !== 1){
    eventFired =1;
    $('.accordian-content').removeClass('selected-content')
    switch ($('.selected-tab').attr('id')){
      case 'tab-one':
        $(`.mobile-tab1`).toggleClass('selected-mobile')
        break
      case 'tab-two':
        $(`.mobile-tab2`).toggleClass('selected-mobile')
        break
      case 'tab-three':
        $(`.mobile-tab3`).toggleClass('selected-mobile')
        break
      case 'tab-four':
        $(`.mobile-tab4`).toggleClass('selected-mobile')
        break
      default :
        $(`.mobile-tab1`).removeClass('selected-mobile')
    }
  }
})

$('.tab').on('click', (e) =>{
  $('.tab').removeClass('selected-tab')
  $(`.mobile-tab1`).removeClass('selected-mobile')
  $(`.mobile-tab2`).removeClass('selected-mobile')
  $(`.mobile-tab3`).removeClass('selected-mobile')
  $(`.mobile-tab4`).removeClass('selected-mobile')

  $('.accordian-content').removeClass('selected-content')

  $(`#${e.target.id}`).toggleClass('selected-tab')
  console.log(e.target.id)

  if($(window).width() < 539){
    console.log('less than 539')
    switch (e.target.id) {
      case 'tab-one':
        $(`.mobile-tab1`).toggleClass('selected-mobile')
        break
      case 'tab-two':
        $(`.mobile-tab2`).toggleClass('selected-mobile')
        break
      case 'tab-three':
        $(`.mobile-tab3`).toggleClass('selected-mobile')
        break
      case 'tab-four':
        $(`.mobile-tab4`).toggleClass('selected-mobile')
        break
      default :
        $(`.mobile-tab1`).removeClass('selected-mobile')
    }
  } else {
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
  }
})

$('.header-container').on('click', (e) =>{
  if($(window).width() < 769){
    $('.header-drawer').toggleClass('header-drawer-visible')
  }
})
