
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  responsive:{
      0:{
          items:1
      },
  }
})

const owlDots = document.querySelector(".owl-dots")

function func() {
  const arr = ['home', 'about us', 'partner', 'portfolio', 'contact us', ]
  const markup = arr.map(el=>{
      console.log(el);
      return `<button role="button" class="owl-dot">${el}</button>`
    }).join('')
  
  owlDots.innerHTML = '';
  owlDots.insertAdjacentHTML('afterbegin', markup)
}

func()
