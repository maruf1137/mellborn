
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
const bars = document.querySelector(".nav__bars")

function func(parentEl) {
  const arr = ['home', 'about us', 'portfolio', 'partner', 'contact us', ]
  const markup = arr.map(el=>{
      return `<button role="button" class='${el === 'home' ? "owl-dot active" : 'owl-dot'}'>${el}</button>`
    }).join('')
  
    parentEl.innerHTML = '';
    parentEl.insertAdjacentHTML('afterbegin', markup)
}
func(owlDots)

function mblNav() {
  const mblBar = document.querySelector('.mbl--nav')
  console.log(mblBar);
  if(bars.classList.contains('active')){
    mblBar.classList.add('nav-active')
    console.log(mblBar.classList);
    func(mblBar)
  }else{
    mblBar.classList.remove('nav-active')
  }
}

bars.addEventListener('click', ()=>{
  bars.classList.toggle('active')
  
  mblNav()
})