import TgForm from './TgForm'
import TgFormItem from './TgFormItem'

export default {
  install (Vue) {
    Vue.component('TgForm', TgForm)
    Vue.component('TgFormItem', TgFormItem)
  }
}
