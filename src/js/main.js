
$('.owl-carousel').owlCarousel({
  loop:false,
  margin:0,
  nav:true,
  navText: [`<svg><use xlink:href="img/icons.svg#icon-chevron-thin-left"></use></svg>`,`<svg><use xlink:href="img/icons.svg#icon-chevron-thin-right"></use></svg>`],
  // navText: [`<i class="fas fa-address-card"></i>`,`next`],
  responsive:{
      0:{
          items:1
      },
  }
})

const owlDots = document.querySelector(".owl-dots")

function func() {
  const arr = ['home', 'about us', 'portfolio', 'partner', 'contact us', ]
  const markup = arr.map(el=>{
      return `<button role="button" class='${el === 'home' ? "owl-dot active" : 'owl-dot'}'>${el}</button>`
    }).join('')
  
  owlDots.innerHTML = '';
  owlDots.insertAdjacentHTML('afterbegin', markup)
}

func()
