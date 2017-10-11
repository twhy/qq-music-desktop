import Carousel from './Carousel'
import CarouselSlide from './CarouselSlide'

export default {
  install(Vue) {
    Vue.component('Carousel', Carousel)
    Vue.component('CarouselSlide', CarouselSlide)
  }
}

export { Carousel, CarouselSlide }