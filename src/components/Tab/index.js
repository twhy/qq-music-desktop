import Tab from './Tab'
import Tabs from './Tabs'

export default {
  install(Vue) {
    Vue.component('Tabs', Tabs)
    Vue.component('Tab', Tab)
  }
}

export { Tab, Tabs }