// carousel
const myCarousel = document.querySelector('#carousel')
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2500,
  wrap: true,
  ride: true,
})
const button = document.querySelector('#carouselButton')
const [child] = button.children
button.onclick = () => {
  if (child.classList.contains('fa-pause')) {
    carousel.pause()
    child.classList.remove('fa-pause')
    child.classList.add('fa-play')
  } else if (child.classList.contains('fa-play')) {
    carousel.cycle()
    child.classList.remove('fa-play')
    child.classList.add('fa-pause')
  }
}
// modal login
const modal = new bootstrap.Modal(document.getElementById('loginModal'), {
  keyboard: false,
})
const modalToggle = document.getElementById('loginToggle')
modalToggle.onclick = () => modal.toggle()

// modal reserve
const modalReserve = new bootstrap.Modal(
  document.getElementById('reserveModal')
)
const modalReserveToggle = document.getElementById('reserveToggle')
modalReserveToggle.onclick = () => modalReserve.toggle()
